from functools import update_wrapper

from aiogram import Router, F
from aiogram.filters import CommandStart
from aiogram.fsm.context import FSMContext
from aiogram.fsm.state import StatesGroup, State
from aiogram.types import Message

from telegram.exceptions import DatabaseException
from telegram.keyboards import admin_keyboards, user_keyboards, login_keyboards

login_router = Router()


def check_code(code) -> (bool, str):  # имитация функции, отвечающая за проверку кода для авторизации
    return True, 'Admin'  # Есть ли в бд     Его роль из бд


class UserLogin(StatesGroup):
    code = State()


@login_router.message(CommandStart())
async def start(message: Message, state: FSMContext):
    # await message.answer_sticker(sticker="") - Можно добавить стикер для приветствия
    await message.answer('Здравствуйте, ...')
    await state.set_state(UserLogin.code)


@login_router.message(UserLogin().code)
async def user_login(message: Message, state: FSMContext):
    code = message.text

    user_exists, role = check_code(code)

    if user_exists:
        if role == 'Admin':
            await message.answer('Вы успешно авторизовались', reply_markup=admin_keyboards.main())
        elif role == 'User':
            await message.answer('Вы успешно авторизовались', reply_markup=user_keyboards.main())
        else:
            raise DatabaseException('User found, Bad role')

    else:
        await message.answer('Вы не являетесь сотрудником')
