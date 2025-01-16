<?php

namespace App\Http\Controllers;

use App\Repositories\LocationRepositoryInterface;
use Illuminate\Http\JsonResponse;

class LocationController extends Controller
{
    private LocationRepositoryInterface $locationService;

    public function __construct(LocationRepositoryInterface $locationService)
    {
        $this->locationService = $locationService;
    }

    public function index(): JsonResponse
    {
        try {
            $locations = $this->locationService->getLocations();

            return response()->json($locations, 200);
        } catch (\RuntimeException $e) {
            return response()->json([
                'error' => 'Something went wrong',
                'message' => $e->getMessage(),
            ], 500);
        }
    }
}
