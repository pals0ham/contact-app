import React from "react";
const ContactList=(props)=>
{
    const renderContactList=props.contacts.map((contact)=>{
        return (
            <div className="item">
                <div className="content">
                    <div className="header">{contact.name}
                        <div>{contact.email}</div>
                    </div>
                </div>
                <i className="trash alternate outline icon"></i>
            </div>
        );
    })
    return(
        <div className="ui celled list">
            Contact List
        </div>
    );
};
export default ContactList;