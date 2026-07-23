<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class MaxVideoDuration implements ValidationRule
{
    public function __construct(private int $maxSeconds) {}

    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (! $value instanceof \Illuminate\Http\UploadedFile) {
            return;
        }

        $path = $value->getRealPath();
        if (! $path || ! is_readable($path)) {
            return;
        }

        try {
            $getID3 = new \getID3();
            $file   = $getID3->analyze($path);
            $seconds = $file['playtime_seconds'] ?? null;
        } catch (\Throwable $e) {
            // If getID3 can't parse the file, let other rules (mimes) handle rejection.
            return;
        }

        if ($seconds === null) {
            return;
        }

        if ($seconds > $this->maxSeconds) {
            $minutes = (int) floor($this->maxSeconds / 60);
            $fail("Video must be {$minutes} minutes or less (uploaded video is "
                . gmdate('i:s', (int) $seconds) . ").");
        }
    }
}
