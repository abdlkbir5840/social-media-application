package com.abdelbahmadi.advice;

import com.abdelbahmadi.exception.AccessDeniedException;
import com.abdelbahmadi.exception.EntityAlreadyExistException;
import com.abdelbahmadi.exception.EntityNotFoundException;
import com.abdelbahmadi.exception.IllegalArgumentException;
import com.abdelbahmadi.response.ErrorResponse;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.HashMap;
import java.util.Map;


@RestControllerAdvice
public class ExceptionHandler {
    @org.springframework.web.bind.annotation.ExceptionHandler(ConstraintViolationException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<Object> handleConstraintViolationException(ConstraintViolationException e) {
        Map<String, String> errors = new HashMap<>();
        for (ConstraintViolation<?> violation : e.getConstraintViolations()) {
            errors.put(violation.getPropertyPath().toString(), violation.getMessage());
        }
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Validation failed");
        response.put("status", HttpStatus.BAD_REQUEST.value());
        response.put("errors", errors);
        response.put("timestamp", Instant.now().toEpochMilli());
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    @org.springframework.web.bind.annotation.ExceptionHandler(EntityAlreadyExistException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ResponseEntity<ErrorResponse> handleEntityAlreadyExistException(EntityAlreadyExistException ex){
        ErrorResponse errorResponse = new ErrorResponse(ex.getMessage(), ex.getHttpStatus() ,ex , LocalDateTime.now(ZoneId.systemDefault()));
        return new ResponseEntity<>(errorResponse,ex.getHttpStatus());
    }
    @org.springframework.web.bind.annotation.ExceptionHandler(EntityNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public  ResponseEntity<ErrorResponse> HnadleEntityNotFoundException(EntityNotFoundException ex){
        ErrorResponse errorResponse = new ErrorResponse(ex.getMessage(), ex.getHttpStatus() ,ex,LocalDateTime.now(ZoneId.systemDefault()));
        return new ResponseEntity<>(errorResponse, ex.getHttpStatus());
    }
    @org.springframework.web.bind.annotation.ExceptionHandler(IllegalArgumentException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public  ResponseEntity<ErrorResponse> HnadleIllegalArgumentException(IllegalArgumentException ex){
        ErrorResponse errorResponse = new ErrorResponse(ex.getMessage(), ex.getHttpStatus() ,ex,LocalDateTime.now(ZoneId.systemDefault()));
        return new ResponseEntity<>(errorResponse, ex.getHttpStatus());
    }
    @org.springframework.web.bind.annotation.ExceptionHandler(AccessDeniedException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public  ResponseEntity<ErrorResponse> HnadleIllegalArgumentException(AccessDeniedException ex){
        ErrorResponse errorResponse = new ErrorResponse(ex.getMessage(), ex.getHttpStatus() ,ex,LocalDateTime.now(ZoneId.systemDefault()));
        return new ResponseEntity<>(errorResponse, ex.getHttpStatus());
    }
}
