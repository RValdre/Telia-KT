package net.kt.contact_backend.service;

import net.kt.contact_backend.dto.ContactDto;

public interface ContactService {
    ContactDto createContact(ContactDto contactDto);
}