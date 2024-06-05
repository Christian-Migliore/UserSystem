package com.personalprojects.usersSystem.controller;

import com.personalprojects.usersSystem.model.User;
import com.personalprojects.usersSystem.service.UserServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    private final UserServiceImpl userService;
    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }

    //Get
    @GetMapping("/get")
    public List<User> getUsers(){
        return userService.getUsers();
    }

    //Add
    @PostMapping("/add")
    public String registerNewUser(@RequestBody User user){
         userService.addNewUser(user);
         return "Utente creato correttamente";
    }

    //Delete
    @DeleteMapping("/delete/{userId}")
    public void deleteUser(
                @PathVariable("userId") int userId){
        userService.deleteUser(userId);
    }

    //Update
    @PutMapping("/update/{userId}")
    public String updateUser(@PathVariable("userId") int userId,
                           @RequestBody User user){
        userService.updateUser(userId, user.getEmail(), user.getPassword());
        return "Utente aggiornato correttamente";
    }
}
