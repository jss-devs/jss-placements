<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'job_profile', 'description', 'company_name', 'salary', 'location',
        'vacancies', 'link', 'session', 'attachment', 'closed', 'management_id',
    ];
}
