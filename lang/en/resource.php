<?php

return [
    'resource' => 'Resource',
    'config' => [
        'config' => 'Config',
        'props' => [
            'allow_edit_diary_by_accessible_user' => 'Allow Editing Diary by Accessible Staff',
            'allow_delete_diary_by_accessible_user' => 'Allow Deleting Diary by Accessible Staff',
            'allow_edit_syllabus_by_accessible_user' => 'Allow Editing Syllabus by Accessible Staff',
            'allow_delete_syllabus_by_accessible_user' => 'Allow Deleting Syllabus by Accessible Staff',
            'allow_edit_lesson_plan_by_accessible_user' => 'Allow Editing Lesson Plan by Accessible Staff',
            'allow_delete_lesson_plan_by_accessible_user' => 'Allow Deleting Lesson Plan by Accessible Staff',
            'allow_edit_assignment_by_accessible_user' => 'Allow Editing Assignment by Accessible Staff',
            'allow_delete_assignment_by_accessible_user' => 'Allow Deleting Assignment by Accessible Staff',
            'allow_edit_online_class_by_accessible_user' => 'Allow Editing Online Class by Accessible Staff',
            'allow_delete_online_class_by_accessible_user' => 'Allow Deleting Online Class by Accessible Staff',
            'allow_edit_learning_material_by_accessible_user' => 'Allow Editing Learning Material by Accessible Staff',
            'allow_delete_learning_material_by_accessible_user' => 'Allow Deleting Learning Material by Accessible Staff',
        ],
    ],
    'book_list' => [
        'book_list' => 'Book List',
        'book_lists' => 'Book Lists',
    ],
    'online_class' => [
        'online_class' => 'Online Class',
        'online_classes' => 'Online Classes',
        'module_title' => 'Manage all Online Classes',
        'module_description' => 'List all Online Classes',
        'start_at_lt_current_time' => 'Start time should be greater than current time.',
        'could_not_delete_ended_class' => 'Could not delete online class that is ended.',
        'props' => [
            'topic' => 'Topic',
            'start_at' => 'Start At',
            'duration' => 'Duration (Mins)',
            'platform' => 'Platform',
            'status' => 'Status',
            'meeting_code' => 'Meeting Code',
            'url' => 'URL',
            'password' => 'Password',
            'description' => 'Description',
        ],
        'platforms' => [
            'google_meet' => 'Google Meet',
            'zoom' => 'Zoom',
            'microsoft_team' => 'Microsoft Team',
        ],
        'statuses' => [
            'pending' => 'Pending',
            'live' => 'Live',
            'ended' => 'Ended',
        ],
        'config' => [
            'config' => 'Config',
        ],
    ],
    'assignment' => [
        'assignment' => 'Assignment',
        'assignments' => 'Assignments',
        'module_title' => 'Manage all Assignments',
        'module_description' => 'List all Assignments',
        'props' => [
            'title' => 'Title',
            'type' => 'Type',
            'date' => 'Date',
            'due_date' => 'Due Date',
            'description' => 'Description',
            'published_at' => 'Published at',
        ],
        'config' => [
            'config' => 'Config',
        ],
        'type' => [
            'type' => 'Assignment Type',
            'types' => 'Assignment Types',
            'module_title' => 'Manage all Assignment Types',
            'module_description' => 'List all Assignment Types',
            'props' => [
                'name' => 'Name',
                'description' => 'Description',
            ],
        ],
    ],
    'lesson_plan' => [
        'lesson_plan' => 'Lesson Plan',
        'lesson_plans' => 'Lesson Plans',
        'module_title' => 'Manage all Lesson Plans',
        'module_description' => 'List all Lesson Plans',
        'props' => [
            'start_date' => 'Start Date',
            'end_date' => 'End Date',
            'topic' => 'Topic',
            'status' => 'Status',
            'is_locked' => 'Is Locked',
            'details' => 'Details',
            'heading' => 'Heading',
            'description' => 'Description',
        ],
        'statuses' => [
            'pending' => 'Pending',
            'published' => 'Published',
            'needs_improvement' => 'Needs Improvement',
        ],
        'config' => [
            'config' => 'Config',
        ],
    ],
    'syllabus' => [
        'syllabus' => 'Syllabus',
        'syllabuss' => 'Syllabuses',
        'module_title' => 'Manage all Syllabuses',
        'module_description' => 'List all Syllabuses',
        'props' => [
            'start_date' => 'Start Date',
            'end_date' => 'End Date',
            'completion_date' => 'Completion Date',
            'unit' => 'Unit',
            'units' => 'Units',
            'unit_number' => 'Unit Number',
            'unit_name' => 'Unit Name',
            'description' => 'Description',
            'remarks' => 'Remarks',
        ],
        'config' => [
            'config' => 'Config',
        ],
    ],
    'learning_material' => [
        'learning_material' => 'Learning Material',
        'learning_materials' => 'Learning Materials',
        'module_title' => 'Manage all Learning Materials',
        'module_description' => 'List all Learning Materials',
        'props' => [
            'title' => 'Title',
            'published_at' => 'Published at',
            'description' => 'Description',
            'audience' => 'Audience',
        ],
        'config' => [
            'config' => 'Config',
        ],
    ],
    'diary' => [
        'diary' => 'Student Diary',
        'diaries' => 'Student Diaries',
        'module_title' => 'Manage Student Diaries',
        'module_description' => 'Keep the records of your student\'s daily diary.',
        'duplicate_record' => 'Diary already exists for this date.',
        'props' => [
            'date' => 'Date',
            'details' => 'Details',
            'heading' => 'Heading',
            'description' => 'Description',
        ],
    ],
    'download' => [
        'download' => 'Download',
        'downloads' => 'Downloads',
        'module_title' => 'Manage all Downloads',
        'module_description' => 'List all Downloads',
        'props' => [
            'title' => 'Title',
            'published_at' => 'Published at',
            'expires_at' => 'Expires at',
            'is_public' => 'Is Public',
            'description' => 'Description',
            'audience' => 'Audience',
        ],
        'config' => [
            'config' => 'Config',
        ],
    ],
    'report' => [
        'report' => 'Report',
        'reports' => 'Reports',
        'date_wise_student_diary' => [
            'date_wise_student_diary' => 'Date wise Student Diary Report',
            'module_title' => 'List all Date wise Student Diary',
            'module_description' => 'Manage all Date wise Student Diary',
        ],
    ],
];
