package com.tesla.finance.component;

import com.tesla.finance.util.Result;

public interface ErrorManager {

    /**
     * Retrieves a responseModel when an error occurs. If
     * replaceByExceptionMessage is active the predefined message for the catch
     * exception will be replaced by the one inside the exception.
     *
     * @param e {@link Exception}
     * @param replaceByExceptionMessage boolean
     * @return {@link Result}
     */
    Result buildResponse(
            final Exception e,
            boolean replaceByExceptionMessage);
}
