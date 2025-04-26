package net.kt.contact_backend.controller;

import lombok.AllArgsConstructor;
import net.kt.contact_backend.dto.ContactDto;
import net.kt.contact_backend.entity.Contact;
import net.kt.contact_backend.service.ContactService;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/contacts")
public class ContactController {

    private ContactService contactService;

    // Build Add Employee REST API
    @PostMapping
    public ResponseEntity<ContactDto> createContact(@RequestBody ContactDto contactDto){
        ContactDto savedContact = contactService.createContact(contactDto);
        return new ResponseEntity<>(savedContact, HttpStatus.CREATED);
    }

    // Build Get Contact REST API
    @GetMapping("{id}")
    public ResponseEntity<ContactDto> getContactById(@PathVariable("id") Long contactId){
        ContactDto contactDto = contactService.getContactById((contactId));
        return ResponseEntity.ok(contactDto);
    }

    // Build Get All Contacts REST API
    @GetMapping
    public ResponseEntity<List<ContactDto>> getAllContacts(){
        List<ContactDto> contacts = contactService.getAllContacts();
        return ResponseEntity.ok(contacts);
    }

    // Build update contact REST API
    @PutMapping("{id}")
    public ResponseEntity<ContactDto> updateContact(@PathVariable("id") Long contactId,
                                                    @RequestBody ContactDto updatedContact){
        ContactDto contactDto = contactService.updateContact(contactId, updatedContact);
        return ResponseEntity.ok(contactDto);
    }
}
