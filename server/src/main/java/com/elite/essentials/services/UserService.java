package com.elite.essentials.services;

import com.elite.essentials.dto.UserDto;
import com.elite.essentials.entity.User;
import com.elite.essentials.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

   private final UserRepository userRepository;
   private final PasswordEncoder passwordEncoder;

   public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
      this.userRepository = userRepository;
      this.passwordEncoder = passwordEncoder;
   }

   public Integer createUser(UserDto userDto) {
      // Check if the email is unique (custom validation)
      if (userRepository.existsByEmail(userDto.getEmail())) {
         throw new IllegalArgumentException("Email is already in use");
      }

      // Map UserDto to User entity
      User user = new User();
      user.setUserName(userDto.getUserName());
      user.setEmail(userDto.getEmail());

      // Hash the password using the PasswordEncoder
      String hashedPassword = passwordEncoder.encode(userDto.getPassword());
      user.setPassword(hashedPassword);

      // Save the user to the repository
      userRepository.save(user);
      return user.getId();
   }
}
