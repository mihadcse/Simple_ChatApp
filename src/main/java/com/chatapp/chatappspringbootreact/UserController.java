package com.chatapp.chatappspringbootreact;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/api/add-user")
    public Users createUser(@RequestBody Users user) {
        return userRepository.save(user);
    }

    @GetMapping("/api/get-user")
    public List<Users> getUsers() {
        return userRepository.findAll();
    }

    // Login by username - just check if exists
    @PostMapping("api/login")
    public ResponseEntity<Users> loginUser(@RequestBody Users user) {
        Users foundUser = userRepository.findByUsername(user.getUsername()).orElse(null);
        if (foundUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        return ResponseEntity.ok(foundUser);
    }
}
