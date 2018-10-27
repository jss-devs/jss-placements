<?php

use Illuminate\Database\Seeder;
use App\Models\Student;

class StudentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (count(Student::all()) < 1)
            factory(Student::class, 5)->create()->each(function($student) {
                $student->assignRole('student');
            });
    }
}
