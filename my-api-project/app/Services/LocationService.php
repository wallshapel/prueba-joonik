<?php

namespace App\Services;

use App\Repositories\LocationRepositoryInterface;

class LocationService implements LocationRepositoryInterface
{
    public function getLocations(): array
    {
        try {
            // Path to JSON file
            $filePath = base_path('locations.json');

            return json_decode(file_get_contents($filePath), true);
        } catch (\Exception $e) {
            // Handle errors in the service and propagate them to the controller
            throw new \RuntimeException('Error reading locations data: '.$e->getMessage());
        }
    }
}
