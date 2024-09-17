package com.example.restful_web_service.jwt;
import com.example.restful_web_service.todo.User;
import com.example.restful_web_service.todo.UserRepository;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class JwtAuthenticationController {

    private final JwtTokenService tokenService;
    private final AuthenticationManager authenticationManager;
    @Autowired
    UserRepository userRepository;

    public JwtAuthenticationController(JwtTokenService tokenService,
                                       AuthenticationManager authenticationManager) {
        this.tokenService = tokenService;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/authenticate")
    public ResponseEntity<JwtTokenResponse> generateToken(
            @RequestBody JwtTokenRequest jwtTokenRequest) {

        var authenticationToken =
                new UsernamePasswordAuthenticationToken(
                        jwtTokenRequest.username(),
                        jwtTokenRequest.password());

        var authentication =
                authenticationManager.authenticate(authenticationToken);

        var token = tokenService.generateToken(authentication);

        return ResponseEntity.ok(new JwtTokenResponse(token));
    }

//    @GetMapping("/")
//    public ResponseEntity<JwtTokenResponse> generateTokenWithGoogle(Authentication authentication) {
//        if(authentication instanceof OAuth2AuthenticationToken){
//            OAuth2AuthenticationToken oauthToken =  (OAuth2AuthenticationToken) authentication;
//            String email = oauthToken.getPrincipal().getAttribute("email");
//            String token = tokenService.generateToken(oauthToken);
//            return ResponseEntity.ok(new JwtTokenResponse(token));
//        }
//        return ResponseEntity.badRequest().build();
//    }
    @GetMapping("/")
    public void generateTokenWithGoogle(HttpServletResponse response, Authentication authentication) throws IOException {
        if(authentication instanceof OAuth2AuthenticationToken){
            OAuth2AuthenticationToken oauthToken =  (OAuth2AuthenticationToken) authentication;
            String email = oauthToken.getPrincipal().getAttribute("email");
            User user = userRepository.findByEmail(email);
            if(user == null){
                User newUser = new User();
                newUser.setEmail(email);
                newUser.setUsername(email);
                userRepository.save(newUser);
            }
            String token = tokenService.generateToken(oauthToken);
            response.sendRedirect("http://localhost:4200/login-success?token=" + token+"&email="+email);
        }
    }
}