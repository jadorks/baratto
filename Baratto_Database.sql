create schema Baratto;
use Baratto;
create table Users(
UserID int auto_increment primary key,
Fname varchar(50) not null, 
Lname varchar(50) not null, 
DOB date not null,
Gender enum('M','F'),
Phonenumber varchar(15) unique not null,
Email varchar(50) unique not null,
Address varchar(50) not null,
OtherSocialMedia varchar(50)
);

create table Products(
ProductID int auto_increment primary key,
UserID int,
foreign key (UserID) references Users(UserID),
Name varchar(255) not null,
Price int unsigned not null,
Description varchar(255) not null
);

create table PaymentServices(
ServiceID int auto_increment primary key,
Name varchar(255) not null,
Email varchar(255) unique,
PaymentOptions enum('VISA','MobileMoney', 'Other')
);

create table PaymentTransaction (
ServiceID int,
foreign key (ServiceID) references PaymentServices(ServiceID),
UserID int,
foreign key (UserID) references Users(UserID),
TransactionDate date not null,
TransactionTime time not null,
Price int unsigned not null,
TransactionType enum('CashOnly','BarterTrade','Both')
);

create table RequestedProducts (
UserID int,
foreign key (UserID) references Users(UserID),
ProductID int,
foreign key (ProductID) references Products(ProductID),
RequestDate date not null,
RequestTime time not null,
TransactionType enum('CashOnly','BarterTrade','Both')
);