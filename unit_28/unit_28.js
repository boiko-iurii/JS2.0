// Task 1
// Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его основе объект goods. Выведите в консоль созданный объект. Помните, все классы - в отдельных файлах. Имена классов с большой буквы.

//Task 2.
//  Добавьте в класс Goods свойства image и count - картинка и количество на складе.

//Task 3. 
//  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).

// Task 4.
// Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для вывода товара на страницу в блок out-4.

const goods2 = new Goods('Наушники Marshall Major III Bluetooth Black (4092186)', 5, 'https://i1.rozetka.ua/goods/4517312/marshall_4092186_images_4517312504.jpg', 2, '2799 грн');

goods2.draw(document.querySelector('.out-4'));


//Task 5.
// Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.

// Task 6.
// Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.

const goods3 = new Goods2('Наушники Marshall Major III Bluetooth Black (4092186)', 5, 'https://i1.rozetka.ua/goods/4517312/marshall_4092186_images_4517312504.jpg', 2, '2799 грн', true);

goods3.draw(document.querySelector('.out-6'));


// Task 7.
// Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.

//Task 8.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.

let v = new Valid('email', '12345');
v.validate();
console.log(v.isValid);

//Task 9.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.

let v2 = new Valid('email', '1234567');
v2.validate();
console.log(v2.isValid);


//Task 10.
// Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.

//Task 11.
// Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.

let valid2 = new Valid2('', '12345678');
valid2.validate();
console.log(valid2);

//Task 12.
// Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.

let valid3 = new Valid2('test@email.com', '12345678');
valid3.validate();
console.log(valid3);
