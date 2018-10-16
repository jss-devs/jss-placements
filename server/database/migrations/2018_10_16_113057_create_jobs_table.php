<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('job_profile');
            $table->text('description')->nullable();
            $table->string('company_name');
            $table->string('salary')->nullable();
            $table->string('location')->nullable();
            $table->string('vacancies')->nullable();
            $table->string('link')->nullable();
            $table->string('session')->nullable();
            $table->string('attachment')->nullable();
            $table->boolean('closed')->default(true);
            $table->unsignedInteger('tpo_id');
            $table->foreign('tpo_id')->references('id')->on('managements')->onDelete('cascade');;
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
        Schema::dropIfExists('jobs');
    }
}
