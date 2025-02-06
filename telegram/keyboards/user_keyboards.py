from aiogram.types import ReplyKeyboardMarkup
from aiogram.utils.keyboard import ReplyKeyboardBuilder


def main() -> ReplyKeyboardMarkup:
    kb = ReplyKeyboardBuilder()
    # kb.button(text="Посмотреть свободные смены на определенной точке")
    # kb.button(text="Посмотреть график в определенной точке")
    # kb.button(text="Посмотреть все свои смены")
    # kb.button(text="Связь с администратором")
    # kb.button(text='Установить желаемые точки работы')
    # kb.button(text='Установить желаемые смены')
    kb.button(text='График моей работы')
    kb.button(text='Связь с админом')
    kb.button(text='Установить мои часы работы')
    kb.button(text='Инструкция')
    #  Прописать функции
    kb.adjust(2)
    return kb.as_markup(resize_keyboard=True)
