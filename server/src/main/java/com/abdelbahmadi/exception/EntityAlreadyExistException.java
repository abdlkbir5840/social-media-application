package com.abdelbahmadi.exception;

import org.springframework.http.HttpStatus;

public class EntityAlreadyExistException extends RuntimeException{
    private final  HttpStatus httpStatus;
    public EntityAlreadyExistException(String message) {
        super(message);
        this.httpStatus = HttpStatus.CONFLICT;
    }
    public HttpStatus getHttpStatus() {
        return httpStatus;
    }
}
