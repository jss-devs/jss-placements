<?php

use Faker\Generator as Faker;
use App\Models\Student;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Student::class, function (Faker $faker) {
    $gender = ['Male', 'Female'];
    $branch = ['CSE', 'IT', 'EE', 'EC', 'ME', 'CE'];
    $course = ['B.Sc', 'B.Tech'];

    return [
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'email' => $faker->unique()->safeEmail,
        'mobile' => $faker->phoneNumber,
        'password' => bcrypt('secret'),
        'roll_no' => $faker->unique()->randomNumber($nbDigits = 4),
        'dob' => $faker->date(),
        'gender' => $gender[array_rand($gender)],
        'father_name' => $faker->name('male'),
        'address' => $faker->address,
        'city' => $faker->city,
        'state' => $faker->state,
        'country' => $faker->country,
        'pincode' => $faker->postcode,
        'tenth_per' => $faker->randomFloat(2, 45, 99),
        'twelth_per' => $faker->randomFloat(2, 45, 99),
        'ug_per' => $faker->randomFloat(2, 45, 85),
        'pg_per' => $faker->randomFloat(2, 45, 85),
        'branch' => $branch[array_rand($branch)],
        'course' => $course[array_rand($course)],
        'remember_token' => str_random(10),
    ];
});
