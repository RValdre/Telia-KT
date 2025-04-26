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
import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public List<ContactDto> getAllContacts() {
        List<Contact> contacts = contactRepository.findAll();
        return contacts.stream().map((contact) -> ContactMapper.mapToContactDto(contact))
                .collect(Collectors.toList());
    }

    @Override
    public ContactDto updateContact(Long contactId, ContactDto updatedContact) {

        Contact contact = contactRepository.findById(contactId).orElseThrow(
                () -> new ResourceNotFoundException("Contact does not exist with given id: " + contactId)
        );

        contact.setFirstName(updatedContact.getFirstName());
        contact.setLastName(updatedContact.getLastName());
        contact.setEmail(updatedContact.getEmail());

        Contact updatedContactObj = contactRepository.save(contact);
        return ContactMapper.mapToContactDto(updatedContactObj);
    }

    @Override
    public void deleteContact(Long contactId) {

        Contact contact = contactRepository.findById(contactId).orElseThrow(
                () -> new ResourceNotFoundException("Contact does not exist with given id: " + contactId)
        );

         contactRepository.deleteById(contactId);
    }
}
