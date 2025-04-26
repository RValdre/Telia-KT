package net.kt.contact_backend.mapper;

import net.kt.contact_backend.dto.ContactDto;
import net.kt.contact_backend.entity.Contact;

public class ContactMapper {

    public static ContactDto mapToContactDto(Contact contact){
        return new ContactDto(
                contact.getId(),
                contact.getFirstName(),
                contact.getLastName(),
                contact.getEmail()
        );
    }

    public static Contact mapToContact(ContactDto contactDto){
        return new Contact(
                contactDto.getId(),
                contactDto.getFirstName(),
                contactDto.getLastName(),
                contactDto.getEmail()
        );
    }
}
