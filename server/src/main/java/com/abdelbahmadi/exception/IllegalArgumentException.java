package com.abdelbahmadi.exception;

import org.springframework.http.HttpStatus;

public class IllegalArgumentException extends  RuntimeException{
    private final HttpStatus httpStatus;
    public IllegalArgumentException(String message) {
        super(message);
        this.httpStatus = HttpStatus.CONFLICT;
    }
    public HttpStatus getHttpStatus() {
        return httpStatus;
    }
}
