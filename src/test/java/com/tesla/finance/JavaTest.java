package com.tesla.finance;

import org.junit.Test;

import java.time.LocalDate;

public class JavaTest {

    @Test
    public void testFechas(){
        LocalDate dateTime = LocalDate.of(2015,10,25);
        System.out.println(""+dateTime.getYear());
        System.out.println(""+dateTime.getMonthValue());
        System.out.println(""+dateTime.getDayOfMonth());
    }

}
