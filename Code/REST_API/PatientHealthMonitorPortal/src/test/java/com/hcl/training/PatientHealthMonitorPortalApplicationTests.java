package com.hcl.training;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import com.hcl.training.model.Bloodcount;
import com.hcl.training.model.Bmi;
import com.hcl.training.model.Users;
import com.hcl.training.service.PatientService;

@SpringBootTest
@WebAppConfiguration
@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = { SpringTestConfiguration.class })
class PatientHealthMonitorPortalApplicationTests {

	
	@Autowired
	Users users;
	Bmi bmi;
	Bloodcount count;
	PatientService service;
		@Test
		void contextLoads() {
		}
		@BeforeEach
	    public void setUp() {
	        users = new Users();
	    }
		@BeforeEach
	    public void setUp1() {
	        bmi = new Bmi();
	    }
		@BeforeEach
	    public void setUp2() {
	        count = new Bloodcount();
	    }
		
	@Test
	public void testsave() {
		users.setUserId(1);
	    assertEquals(1, users.getUserId());
	    users.setPassword("kowshik");
	    assertEquals("kowshik", users.getPassword());
	    users.setFirstName("kowshik");
	    assertEquals("kowshik", users.getFirstName());
	    users.setLastName("kotha");
	    assertEquals("kotha", users.getLastName());
	    users.setGender("Male");
	    assertEquals("Male", users.getGender());
	    users.setAge(22);
	    assertEquals(22, users.getAge());
	    users.setContactNumber("918932");
	    assertEquals("918932", users.getContactNumber());
	    users.setEmail("Kowshik@gmail.com");
	    assertEquals("kowshik@gmail.com",users.getEmail());
	    users.setZipCode(1234);
	    assertEquals(1234,users.getZipCode());
	    users.setCity("ppm");
	    assertEquals("ppm",users.getCity());
	    users.setAddress("ppm");
	    assertEquals("ppm",users.getAddress());
	    service.saveData(users);
	}
	@Test
	public void testsavebmi() {
		bmi.setId(1);
		assertEquals(1,bmi.getId());
		bmi.setUserId(1);
		assertEquals(1,bmi.getUserId());
		bmi.setWeight(55);
		assertEquals(55,bmi.getWeight());
		bmi.setHeight(5.70f);
		assertEquals(5.70f,bmi.getHeight());
		bmi.setDate("10/10/2020");
		assertEquals("10/10/2020",bmi.getDate());
		service.patientbmi(bmi);
	}
	@Test
	public void testsaveblood() {
		count.setId(1);
	    assertEquals(1,count.getId());
	    count.setUserId(1);
	    assertEquals(1,count.getUserId());
	    count.setRbc(1);
	    assertEquals(1,count.getRbc());
	    count.setWbc(1);
	    assertEquals(1,count.getWbc());
	    count.setPlatelet(1);
	    assertEquals(1,count.getPlatelet());
	    count.setDate("10/10/2020");
	    assertEquals("10/10/2020",count.getDate());
	    service.bloodcount(count);
	    
	}
	  @Mock
	    private SpringApplicationBuilder springApplicationBuilder;
		@Test
	    public void testIt() {
	        ServletInitializer servletInitializer = new ServletInitializer();
	        when(springApplicationBuilder.sources(PatientHealthMonitorPortalApplication.class)).thenReturn(springApplicationBuilder);
	        SpringApplicationBuilder result = servletInitializer.configure(springApplicationBuilder);
	        verify(springApplicationBuilder).sources(PatientHealthMonitorPortalApplication.class);
	        assertEquals(springApplicationBuilder, result);
	    }
	

}
