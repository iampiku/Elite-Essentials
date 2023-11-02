package com.elite.essentials.mappers;

import com.elite.essentials.dto.UserDto;
import com.elite.essentials.entity.User;

public class UserMapper {
   public static UserDto toUserDto(User user) {
      // Map User properties to UserDto properties
      UserDto userDto = new UserDto();
      userDto.setUserName(user.getUserName());
      userDto.setEmail(user.getEmail());
      return userDto;
   }

   public static User toUser(UserDto userDto) {
      // Map UserDto properties to User properties
      User user = new User();
      user.setUserName(userDto.getUserName());
      user.setEmail(userDto.getEmail());
      return user;
   }
}
