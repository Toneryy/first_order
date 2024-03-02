import re

# Функция для перевода значений из px в rem
def px_to_rem(px_value):
    rem_value = float(px_value.replace('rem', '')) * 16
    return str(rem_value) + 'px'

# Открытие файла и замена значений
with open('index.css', 'r', encoding='utf-8') as file:
    css_content = file.read()

# Использование регулярных выражений для замены значений
css_content = re.sub(r'(\d+\.?\d*)px', lambda x: px_to_rem(x.group()), css_content)

# Запись изменений обратно в файл
with open('index.css', 'w', encoding='utf-8') as file:
    file.write(css_content)
