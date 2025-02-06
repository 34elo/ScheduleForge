from aiogram.types import ReplyKeyboardMarkup
from aiogram.utils.keyboard import ReplyKeyboardBuilder


def main() -> ReplyKeyboardMarkup:
    kb = ReplyKeyboardBuilder()
    # kb.button(text="Сформировать частичный график")
    # kb.button(text="Отправить уведомление сотрудникам")
    # kb.button(text="Расписание на точках")
    # kb.button(text="Связаться с сотрудником")
    # kb.button(text="Количество смен у сотрудников")
    # kb.button(text='Выгрузить в Excel')
    # kb.button(text='Загрузить из Excel')

    # Добавить кнопки по функционалу

    kb.button(text='Формирование графика')
    kb.button(text='Связь с сотрудником')
    kb.button(text='Отчеты')
    kb.button(text='Просмотр расписаний')
    kb.button(text='Отправить уведомление')
    kb.button(text='Редактирование графика')
    kb.button(text='Создать сотрудника')
    kb.button(text='Инструкция')

    kb.adjust(2)
    return kb.as_markup(resize_keyboard=True)
