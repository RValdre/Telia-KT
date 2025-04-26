package net.kt.contact_backend.service.impl;

import lombok.AllArgsConstructor;
import net.kt.contact_backend.dto.ContactDto;
import net.kt.contact_backend.entity.Contact;
import net.kt.contact_backend.exception.ResourceNotFoundException;
import net.kt.contact_backend.mapper.ContactMapper;
import net.kt.contact_backend.repository.ContactRepository;
import net.kt.contact_backend.service.ContactService;
import org.springframework.stereotype.Service;

import java.lang.module.ResolutionException;

@Service
@AllArgsConstructor
public class ContactServiceImpl implements ContactService {

    private ContactRepository contactRepository;

    @Override
    public ContactDto createContact(ContactDto contactDto) {

        Contact contact = ContactMapper.mapToContact(contactDto);
        Contact savedContact = contactRepository.save(contact);
        return ContactMapper.mapToContactDto(savedContact);
    }

    @Override
    public ContactDto getContactById(Long contactId) {
        Contact contact = contactRepository.findById(contactId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Contact not found by given id: " + contactId));
        return ContactMapper.mapToContactDto(contact);
    }
}
