## Установка и запуск проекта:

Устанавливаем NodeJs **_не ниже версии 16.7.0_**

Вводим в терминале команду для клонирование репозитория

```bash
git clone
```

Добавляем туда запись

`необходимая ссылка HTTPS или SSH`

В IDE необходимо открыть файл проекта и в терминал написать следующие команды:

```bash
npm ci
npm run dev
```

Устанавливаем необходимые пакеты для работы и запускаем проект

Для запуска бэкенд, также необходимо клонировать репозиторий и в терминал написать следующие команды:

```bash
pip install requirements.txt
cd events
python manage.py runserver
```

## Работа с файлами

### Работа с глобальной папкой shared

В глобальной папке shared находятся части сайта, которые могут быть использованы в других проектах. При добавлении новыйх элментов в эту папку рекомендуется обсудить необходимость этого компнента.

## Импорты

В проекте находится один tsconfig, в нем можно прописывать алиасы для импортов, чтобы упростить импортирование компонентов/методов и т.п.

## Коммиты

Коммиты строятся в оответсвии с номером задачи, так же необходимо кратко описывать, что было добавлено или изменено.

```bash
git add -A
git commit -m
git push origin
```

### Git flow

Создаем ветки от ветки **master**. После окончания тестирования задача ждет сбора релиза. После сбора релизной ветки еще раз проверяется вместе с другими задачами.

### Форматирование

При установке проекта, сразу настроить в IDE автоформатирование под `prettier` и `eslint`, чтобы у всех было единое форматирование.
Если в конфиге форматирования или линтинга что-то не устраивает или надо дополнить - необходимо обсудить изменения.
