package com.abdelbahmadi.exception;

import org.springframework.http.HttpStatus;

public class EntityNotFoundException extends  RuntimeException{
    private final HttpStatus httpStatus;
    public EntityNotFoundException(String message) {
        super(message);
        this.httpStatus = HttpStatus.NOT_FOUND;
    }
    public HttpStatus getHttpStatus() {
        return httpStatus;
    }
}
