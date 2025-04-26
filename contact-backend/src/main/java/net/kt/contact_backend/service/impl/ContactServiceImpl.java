package net.kt.contact_backend.service.impl;

import lombok.AllArgsConstructor;
import net.kt.contact_backend.dto.ContactDto;
import net.kt.contact_backend.entity.Contact;
import net.kt.contact_backend.mapper.ContactMapper;
import net.kt.contact_backend.repository.ContactRepository;
import net.kt.contact_backend.service.ContactService;
import org.springframework.stereotype.Service;

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
}
