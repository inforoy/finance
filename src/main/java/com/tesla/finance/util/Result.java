package com.tesla.finance.util;

import org.apache.commons.lang3.StringUtils;

import java.io.Serializable;

/**
 * Result domain object.
 *
 */
public class Result implements Serializable {

    private String code;
    private String message;

    /**
     * Gets the code.
     *
     * @return {@link String}
     */
    public final String getCode(){
        return code;
    }

    /**
     * Sets the code
     *
     * @param code {@link String}
     */
    public final void setCode(
            final String code){
        this.code = StringUtils.stripToNull(code);
    }

    /**
     * Gets the message.
     *
     * @return {@link String}
     */
    public final String getMessage(){
        return message;
    }

    /**
     * Sets the message.
     *
     * @param message {@link String}
     */
    public final void setMessage(
            final String message){
        this.message = StringUtils.trimToNull(message);
    }

}
