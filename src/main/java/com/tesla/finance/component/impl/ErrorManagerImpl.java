package com.tesla.finance.component.impl;

import com.tesla.finance.component.ErrorManager;
import com.tesla.finance.util.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

/**
 * Component management of errors
 */
@Component
public class ErrorManagerImpl implements ErrorManager {

    @Autowired
    Environment environment;

    /**
     * Retrieves a responseModel when an error occurs. If
     * replaceByExceptionMessage is active the predefined message for the catch
     * exception will be replaced by the one inside the exception.
     *
     * @param e {@link Exception}
     * @return {@link Result}
     */
    @Override
    public Result buildResponse(
            final Exception e,
            boolean replaceByExceptionMessage){

        if (e == null) {
            return getSuccess();
        }

        return getFail(e, replaceByExceptionMessage);
    }

    /**
     * Retrieves a result when the operation has been successful.
     *
     * @return {@link Result}
     */
    private Result getSuccess(){

        String code = environment.getProperty("app.component.error.code.success");
        String message = environment.getProperty("app.component.error.message.success");

        return buildResult(code, message);
    }

    /**
     * Retrieves a result when an error has occurred.
     *
     * @param e {@link Exception}
     * @return {@link Result}
     */
    private Result getFail(
            final Exception e,
            boolean replaceByExceptionMessage){

        String className = e.getClass().getSimpleName();
        StringBuilder codeKey = new StringBuilder();
        codeKey.append("app.component.error.code.");
        codeKey.append(className);
        String code = environment.getProperty(codeKey.toString());
        StringBuilder messageKey = new StringBuilder();
        String message;
        if (replaceByExceptionMessage) {
            message = e.getMessage();
            return buildResult(code, message);
        }
        messageKey.append("app.component.error.message.");
        messageKey.append(className);
        message = environment.getProperty(messageKey.toString());

        return buildResult(code, message);
    }

    /**
     * Builds the result.
     *
     * @param code {@link String}
     * @param message {@link String}
     * @return {@link Result}
     */
    private Result buildResult(
            final String code,
            final String message){

        Result result = new Result();
        result.setCode(code != null ? code : environment.getProperty("app.component.error.code.error"));
        result.setMessage(message != null ? message : environment.getProperty("app.component.error.message.error"));

        return result;
    }

}
