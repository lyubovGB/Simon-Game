# Мини-игра по мотивам Simon Game

<h2>Что внутри?</h2>
<ul>
  <li>Почти копия популярной игры</li>
  <li>Как и в оригинале по кнопке старт начинается подсветка цветов в рандомном порядке</li>
 <li>После окончания пользователю необходимо воспроизвести последовательность</li>
  <li>При правильном воспроизведении происходит переход на следующий уровень с большим количеством цветов и с их ускоренной подсветкой</li>
  <li>При не правильном порядке показывается сообщение об ошибке и игра скидывается до первого уровня</li>  
  <li>После прохождения 3го уровня появляется сообщение о победе и игра скидывается до нуля</li>
</ul>

<h2>Как работает?</h2>
<ul>
  <li>Логика игры построена на Vue2</li>
  <li>Игра поделена на этапы
      <ol> 
        <li> Генерация рандома цветов
            <ul>
              <li>От первого уровня(набор 2х цветов, с разностью в 1.5 сек) происходит рандомная генерация чисел. Эти числа пушатся в массив</li>
              <li>После этого Кнопка остается не активна до конца игры</li>
            </ul>
        </li>
        <li>Повторение последовательности цветов пользователем.
            <ul>
              <li>При нажатии на блок в массив для пользовательских цветов пушится номер блока</li>
              <li>Вызов метода проверки</li>
            </ul>
        </li>
        <li>Проверка введенных пользователем цветов
           <ul>
                <li>Сравнение длины двух образовавшихся массивов</li>
                <li>Поэлементное сравнение элементов</li>
                <li>В случае всех схождений увеличивается уровень, уменьшается скорость, сбрасываются все значения из массивов, и начинаем с первого этапа</li>
                <li>Если уровень превышает 3, то появляется сообщение о победе</li>
                 <li>В случае неудачи происходит перезагрузка страницы</li>
           </ul>
        </li>
      </ol>
  </li>
</ul>

<h2>Что на данный момент можно доработать</h2>
<ul>
  <li>С визуальной стороны - игра не адаптивна</li>
  <li>Не хватает подсветки при наведении </li>
  <li>Можно предложить пользователю выбор уровня</li>
  <li>Вместо алертов можно сделать модальные окна</li>
</ul>
<h2>Послесловие:</h2>
<ul>
  <li>Так же как и прошлый проект с формами, у меня есть ощущение, что хоть он и работает, но всё можно сделать куда проще</li>
  <li>Проект был сделан так же как и прошлый за 3 дня</li>
  <li>Для меня было очень важно уложиться в срок и какой бы ни был исход, я уже приобрела огромный опыт!</li>
</ul>
