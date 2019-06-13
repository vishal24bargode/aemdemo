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

@Model(adaptables = Resource.class, resourceType = {CommonConstant.HEADER_RESOURCE}, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class HeaderController{
	
	@ChildResource
    @Default(values = "")
    @Named("items")
    private Resource header;
	
	private List<HeaderModel> headerModels = new ArrayList<>();
		
	@PostConstruct
	protected void init() {
		if (header != null) {

            final Iterator<Resource> iterator = header.listChildren();
            iterator.forEachRemaining(item -> {
                final HeaderModel headerModel = new HeaderModel();
                headerModel.setName(item.getValueMap().get("name", String.class));
                headerModel.setValue(item.getValueMap().get("value", String.class));
               
                headerModels.add(headerModel);
            });

        }
	}

	public Resource getHeader() {
		return header;
	}

	public List<HeaderModel> getHeaderModels() {
		return headerModels;
	}
}
