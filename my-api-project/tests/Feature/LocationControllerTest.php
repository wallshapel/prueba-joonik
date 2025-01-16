<?php

namespace Tests\Feature;

use Tests\TestCase;

class LocationControllerTest extends TestCase
{
    /**
     * Test a successful request with a valid API key.
     */
    public function test_get_locations_with_valid_api_key()
    {
        // Simulates the request to the endpoint with the valid API Key
        $response = $this->withHeaders([
            'X-API-KEY' => env('API_KEY'),
        ])->get('/api/locations');

        // Verify that the status code is 200
        $response->assertStatus(200);

        // Check that the answer has the expected structure
        $response->assertJsonStructure([
            '*' => [
                'code',
                'name',
                'image',
                'creationDate',
            ],
        ]);
    }

    /**
     * Test a request with an invalid API key.
     */
    public function test_get_locations_with_invalid_api_key()
    {
        // Simulate the request with an invalid API Key
        $response = $this->withHeaders([
            'X-API-KEY' => 'invalid_key',
        ])->get('/api/locations');

        // Verify that the status code is 401
        $response->assertStatus(401);

        // Check the error message in the response
        $response->assertJson([
            'error' => 'Unauthorized: Invalid API KEY',
        ]);
    }

    /**
     * Test a request without an API key.
     */
    public function test_get_locations_without_api_key()
    {
        // Simulate request without API Key
        $response = $this->get('/api/locations');

        // Verify that the status code is 401
        $response->assertStatus(401);

        // Check the error message in the response
        $response->assertJson([
            'error' => 'Unauthorized: Invalid API KEY',
        ]);
    }
}
