<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoundsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rounds', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->text('description')->nullable();
            $table->json('shortlisted_students')->nullable();
            $table->unsignedInteger('job_id');
            $table->unsignedInteger('tpo_id');
            $table->foreign('tpo_id')->references('id')->on('managements')->onDelete('cascade');;
            $table->foreign('job_id')->references('id')->on('jobs')->onDelete('cascade');;
            $table->boolean('active')->default(true);
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
        Schema::dropIfExists('rounds');
    }
}
