package com.elite.essentials.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;


public class UserDto {

   @Getter
   @NotBlank
   @NotNull(message = "Username is required")
   private String userName;


   @NotBlank
   @NotNull(message = "Password is required")
   @Getter
   private String password;

   @NotBlank
   @NotNull(message = "Email is required")
   @Email(message = "Invalid email address")
   @Getter
   private String email;
   private long contactNo;
   private String role;
   private Object address;

   public void setUserName(String userName) {
      this.userName = userName;
   }

   public void setEmail(String email) {
      this.email = email;
   }

   public void setPassword(String password) {
      this.password = password;
   }
}
