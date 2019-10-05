# Old school site

Все исходники для сайта schoold.ru, которые крутятся на VPSке от Reg.ru

## Build and run

1. Поставьте себе [Node.js](https://nodejs.org/en/download/) по соответствующей инструкции. Вместе с нодой поставится и
менеджер пакетов npm

2. Скачайте/склонируйте этот репозиторий

3. Соберите все депенденсис и либы, прописав `npm install` в руте проекта (воспользуйтесь командной строкой/вшитым в 
IDE терминалом). 
    * npm может потребовать права администратора, это ок
    * npm может найти vulnerabilities (уязвимости в пакетах). Попробуйте пофиксить их через `npm audit fix`
     (либо `npm audit fix -f` - более хардовый метод). Если команды не помогли - забейте, проект вероятнее всего
     все равно нормально соберется. Ну и сообщите мне, если шо (@KseniaDumpling в вк/телеге)

4. Запустите проект, прописав `npm start` в том же руте. Результат будет виден в http://localhost:4000

## Architecture

Что используется в проекте: 

* Базово: Node.JS & npm
* Express, File-system & nodemailer - пакеты для бэка
* EJS для фронта 
* Bootstrap (но подключается он в заголовке, а не через npm-модуль, потому что я дурак)

Краткое введение, что вообще происходит в папках: 

* в package.json лежат все dependencies (почитайте в справке по ноде, как и зачем это нужно)
* app.js - основной файл приложения, написанный на фреймворке Express. Устанавливает все внутренние настройки,
  прописывает пути, слушает 4000 порт (читайте справку про Node.JS Express)
* /views - все страницы + подключаемые модули (хедеры, футеры и прочее) в папке includes. Советую перед началом
  верстки ознакомится, как HTML ложится в формат ejs, какие есть особенности, как работать со скриптами внутри файла 
  (читайте документацию по ejs - и сразу предупрежу, она написана отвратительно, крепитесь)
* /public - в ней лежит все, что помогает в отображении содержимого папки views: css, images, js с вспомогательными 
  скриптами.
  
_дальше пойдет про бэкенд_

* /routes/site.js - прокладывает все пути и перемещения по страницам с соответсвующими запросами. Запросы обрабатываются
  контроллером
* /controllers/site.js - говорит, что рендерить на странице. Если страница содержит в себе какую-то логику, то внутри
  запроса будут вызываться методы из соответствующих файлов в папке /models
* /models - содержит в себе бизнес-логику. В данном проекте помимо верстки есть три "функциональные" области: фильтрация
  статей, добавления почт в рассылку и обработка формы обратной связи
* /data - в проекте не подключалась никакая БД, поэтому все хранится локально в json-файлах. Было решено, что данные
  файлы будут не столь тяжеловесны, поэтому времени на работу с БД я не тратила. Если в итоге оунеры отойдут от 
  обговоренных правил - я лишь пожелаю им удачи.
  
## Fuckups

NASA в далеком 1977 году отправили в космос свой Вояджер-1  - на данный момент наиболее отдалённый из созданных людьми 
космический объект, который вышел не только за пределы Солнечной системы, но и даже за пределы гелиосферы. Сейчас 
Вояджер-1 находится на расстоянии в 13 миллиардов миль от Земли.

От идеального проекта данный сайт находится примерно на таком же расстоянии.

##### Как быть и что делать?

Я могу посоветовать отрефакторить ccs-файл: почистить неиспользуемые блоки, правильнее организовать классы, в принципе
разделить файл на множество более мелких: для каждой ejs-страницы свой css-файл + общий main.css

Что делать с ужасной версткой? Я хз. В проекте смешались bad-practises, высокая скорость написания, моя лень, местами
странные запросы дизайнера (14 разных размеров шрифтов, Карл!), полное игнорирование адаптивности при разработке шаблона,
внезапно обнаруженная потребность в функционале, сроки, моя профнепригодность. 
В общем, все, что могло пойти не так - пошло не так. Надеюсь, дальше вы либо разберетесь и все поправите, либо к чертям
все снесете и напишете заново. Мне же осталось только искренне пожелать вам удачи. 

With best wishes,  
KseniaDumpling