package com.elite.essentials.controllers;

import com.elite.essentials.dto.UserDto;
import com.elite.essentials.exception.ErrorResponse;
import com.elite.essentials.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Validated
@RestController
@RequestMapping("/api/users")
public class UserController {

   @Autowired
   private UserService userService;

   @PostMapping
   public ResponseEntity<?> createUser(@Valid @RequestBody UserDto userDto, BindingResult bindingResult) {
      if (bindingResult.hasErrors()) {
         // Handle validation errors and return an error response
         ErrorResponse errorResponse = new ErrorResponse();
         errorResponse.setStatus(HttpStatus.BAD_REQUEST.value());
         errorResponse.setMessage("Validation errors");
         return ResponseEntity.badRequest().body(errorResponse);
      }
      // Validate and map the DTO to the User entity (if necessary)
      Integer userId = userService.createUser(userDto);
      // Return a response, possibly a UserDto
      return new ResponseEntity<>(userId, HttpStatus.CREATED);
   }
}
