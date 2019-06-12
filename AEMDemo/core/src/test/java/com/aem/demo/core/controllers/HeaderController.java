package com.aem.demo.core.controllers;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Named;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Optional;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import com.aem.demo.core.models.HeaderModel;
import com.aem.demo.core.constants.CommonConstant;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class HeaderController{
	
	@ValueMapValue
    @Default(values = "")
	@Optional
    private String name;
	
	@ValueMapValue
    @Default(values = "")
	@Optional
    private String description;
		
	@PostConstruct
	protected void init() {
		
	}
	
	public String getDescription() {
        return description;
    }
	
	public String getName() {
        return name;
    }	
}
