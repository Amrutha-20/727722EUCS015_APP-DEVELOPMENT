package com.example.partymanagement.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.partymanagement.Model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String username);

    @Query("SELECT u.userName FROM User u WHERE u.email = :email")
    String findUserNameByEmail(String email);

    @Query("SELECT u.id FROM User u WHERE u.email=:name")
    int findId(@Param("name") String name);

    @Query("SELECT u FROM User u WHERE u.role = 'ADMIN'")
    List<User> findAdmins();

    

}
