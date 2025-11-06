package com.gardenday.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestController
public class IndexController {

    @GetMapping("/")
    public ResponseEntity<Map<String, Object>> index() {
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Garden Day API");
        response.put("version", "0.0.1-SNAPSHOT");
        response.put("timestamp", LocalDateTime.now());
        response.put("endpoints", Map.of(
            "health", "/api/health"
        ));
        return ResponseEntity.ok(response);
    }
}

