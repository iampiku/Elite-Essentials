package com.elite.essentials.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "users")
public class User {

   @Id
   private Integer id;
   private String userName;
   private String password;
   private String email;
   private long contactNo;
   private String role;
   private Object address;

}
