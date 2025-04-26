package net.kt.contact_backend.service;

import net.kt.contact_backend.dto.ContactDto;

import java.util.List;

public interface ContactService {
    ContactDto createContact(ContactDto contactDto);

    ContactDto getContactById(Long contactId);

    List<ContactDto> getAllContacts();

    ContactDto updateContact(Long contactId, ContactDto updatedContact);
}