<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->increments('id');
            $table->string('first_name');
            $table->string('last_name')->nullable();
            $table->string('email')->unique();
            $table->string('mobile')->nullable();
            $table->string('password');
            $table->string('roll_no')->unique();
            $table->string('dob')->nullable();
            $table->enum('gender', ['Male', 'Female'])->default('Male');
            $table->string('father_name')->nullable();
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('country')->default('India')->nullable();
            $table->string('pincode')->nullable();
            $table->string('tenth_per')->nullable();
            $table->string('twelth_per')->nullable();
            $table->string('ug_per')->nullable();
            $table->string('pg_per')->nullable();
            $table->string('branch')->nullable();
            $table->string('course')->nullable();
            // $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('students');
    }
}
