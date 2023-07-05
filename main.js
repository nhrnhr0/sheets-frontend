
let is_order_urgent_radio_1 = undefined;
let is_order_urgent_radio_2 = undefined;
let is_order_urgent_radio_3 = undefined;

let approve_extra_important_cost;
let non_urgent_order_date_input;

let need_to_print_on_products_select_input = undefined;
let need_to_order_products_select_input = undefined;
let need_to_cut_checkbox_input = undefined;
let products_from_the_client_input = undefined;
let products_order = undefined;
// files upload functionallity
let uploaded_files = undefined;
let order_delivery_radio_1 = undefined;
let order_delivery_radio_2 = undefined;
let order_delivery_address_input = undefined;
let is_graphic_final_radio_input_1 = undefined;
let is_graphic_final_radio_input_2 = undefined;
let client_graphics_text_textarea = undefined;

// on document ready we bind the files input to the upload function
document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByName('files[]')[0].addEventListener('change', handleFileSelect, false);
    uploaded_files = document.getElementById('uploaded_files');
    init_fields_visibility();
    add_events_listeners_to_forms();
});

function get_file_cell(file_input_idx, file_name) {
    let html = `
    <div class="row">
        <div class="col-md-4 mb-3">
            <label for="file_input" class="form-label">שם הקובץ</label>
              </label>
              <input
                type="text"
                class="form-control"
                id="file_input_name_${file_input_idx}"
                placeholder=""
                value="${file_name}"
                disabled
              />
        </div>
        <div class="col-md-4 mb-3">
            <label for="file_input" class="form-label">רוחב הקובץ</label>
                </label>
                <input
                type="text"
                class="form-control"
                id="file_input_width_${file_input_idx}"
                placeholder=""
                value=""
                />
                
                <small class="text-muted">
                <br/>   
                שים לב! יש לציין רוחב, ולא גובה מקסימום 58 ס"מ (1 = גודל נוכחי)
                </small>
        </div>
        <div class="col-md-2 mb-3">
            <label for="file_input" class="form-label">כמות הדפסים</label>
                </label>
                <input
                type="number"
                class="form-control"
                id="file_input_copies_${file_input_idx}"
                placeholder=""
                value=""
                />
            </div>
        <div class="col-md-2 mb-3">
        <label for="delete-btn" class="form-label"><br/></label>
        <br/>
            <button class="btn btn-danger" type="button" onclick="delete_file_cell(${file_input_idx})">מחק קובץ</button>
        </div>
        </div>
`;
    return html;
}

function delete_file_cell(file_index) {
    // remove the file cell from the uploaded_files element by the file_index
    // from there get the file name and remove it from the files input (has multiple files[] inputs)
    // and remove the file cell from the uploaded_files element
    // and update the total_files_length
    debugger;
    let file_name = document.getElementById(`file_input_name_${file_index}`).value;
    let files_inputs = document.getElementsByName('files[]');
    for (let i = 0; i < files_inputs.length; i++) {
        let files = files_inputs[i].files;
        for (let j = 0; j < files.length; j++) {
            if (files[j].name === file_name) {
                files_inputs[i].remove(j);
            }
        }
    }
    let file_cell = document.getElementById(`file_cell_${file_index}`);
    file_cell.remove();
    total_files_length--;

}

let total_files_length = 0;

function handleFileSelect(evt) {
    // for every file (uploaded before / new uploaded) we will create a new div:
    // we will add a new input field with the file name readonly and a delete button
    // and text input field for the client's wanted file width
    // and number input field for the client's wanted file copies
    
    // get the files
    let files = evt.target.files;
    // loop over the files
    for (let i = 0, f; f = files[i]; i++) {
        // create a new div
        let div = document.createElement('div');
        div.className = 'file-cell';
        div.id = `file_cell_${total_files_length}`;
        // add the file name to the div
        div.innerHTML = get_file_cell(total_files_length, f.name);
        // add the div to the uploaded_files_element
        uploaded_files.appendChild(div);
        total_files_length++;
    }

    // hide the files input field and add a file upload input field
    // <input
            //     type="file"
            //     class="form-control mb-3 mt-3"
            //     name="files[]"
            //     id="files"
            //     multiple
            //     accept="image/*,application/pdf"
            //   />
    let files_inputs = document.getElementsByName('files[]');
    debugger;
    // $(files_inputs).style.display = 'none';
    for(let i = 0; i < files_inputs.length; i++) {
        files_inputs[i].style.display = 'none';
    }
    let new_files_input = document.createElement('input');
    new_files_input.type = 'file';
    new_files_input.className = 'form-control mb-3 mt-3';
    new_files_input.name = 'files[]';
    new_files_input.id = 'files';
    new_files_input.multiple = true;
    new_files_input.accept = 'image/*,application/pdf';
    new_files_input.addEventListener('change', handleFileSelect, false);
    document.getElementById('files_input_container').appendChild(new_files_input);

}

















function init_fields_visibility() {
    need_to_print_on_products_select_input = document.getElementById('need_to_print_on_products_select_input');
    need_to_order_products_select_input = document.getElementById('need_to_order_products_select_input');
    need_to_cut_checkbox_input = document.getElementById('need_to_cut_checkbox_input');
    products_from_the_client_input = document.getElementById('products_from_the_client_input');
    products_order = document.getElementById('products_order');
    order_delivery_radio_1 = document.getElementById('order_delivery_radio_1');
    order_delivery_radio_2 = document.getElementById('order_delivery_radio_2');
    order_delivery_address_input = document.getElementById('order_delivery_address_input');
    is_graphic_final_radio_input_1 = document.getElementById('is_graphic_final_radio_input_1');
    is_graphic_final_radio_input_2 = document.getElementById('is_graphic_final_radio_input_2');
    client_graphics_text_textarea = document.getElementById('client_graphics_text_textarea');
    is_order_urgent_radio_1 = document.getElementById('is_order_urgent_radio_1');
    is_order_urgent_radio_2 = document.getElementById('is_order_urgent_radio_2');
    is_order_urgent_radio_3 = document.getElementById('is_order_urgent_radio_3');
    approve_extra_important_cost = document.getElementById('approve_extra_important_cost');
    non_urgent_order_date_input = document.getElementById('non_urgent_order_date_input');


    // hide the need_to_order_products_select_input and need_to_cut_checkbox_input
    // to show and hide the parent with class = "col-md-7 mb-3" can be few levels up
    $(need_to_order_products_select_input).closest('.form-part').hide();
    $(need_to_cut_checkbox_input).closest('.form-part').hide();
    $(products_from_the_client_input).closest('.form-part').hide();
    $(products_order).closest('.form-part').hide();
    $(order_delivery_address_input).closest('.form-part').hide();
    $(client_graphics_text_textarea).closest('.form-part').hide();
    $(approve_extra_important_cost).closest('.form-part').hide();
    $(non_urgent_order_date_input).closest('.form-part').hide();
}


function order_delivery_logic(event) {
    // if checked and value = delivery
    // show order_delivery_address_input
    // if checked and value = pickup or else
    // hide order_delivery_address_input
    debugger;
    if (event.target.checked && event.target.value == 'delivery') {
        $(order_delivery_address_input).closest('.form-part').show();
    } else {
        $(order_delivery_address_input).closest('.form-part').hide();
    }
}

function is_order_urgent_logic(event) {
    // if checked and value = today | tommorow:
    // show approve_extra_important_cost
    // else or regular
    // hide approve_extra_important_cost
    // show non_urgent_order_date_input
    debugger;
    if (event.target.checked && (event.target.value == 'today' || event.target.value == 'tommorow')) {
        $(approve_extra_important_cost).closest('.form-part').show();
        $(non_urgent_order_date_input).closest('.form-part').hide();
    } else {
        $(approve_extra_important_cost).closest('.form-part').hide();
        $(non_urgent_order_date_input).closest('.form-part').show();
    }
}


//// logic of hidden and revileaning forms
function add_events_listeners_to_forms() {
    // add event listener to the form select
    need_to_print_on_products_select_input.addEventListener('change', need_to_print_logic);
    need_to_order_products_select_input.addEventListener('change', need_to_order_logic);

    // add event listener to the form radio
    order_delivery_radio_1.addEventListener('change', order_delivery_logic);
    order_delivery_radio_2.addEventListener('change', order_delivery_logic)

    is_graphic_final_radio_input_1.addEventListener('change', is_graphic_final_logic);
    is_graphic_final_radio_input_2.addEventListener('change', is_graphic_final_logic);

    is_order_urgent_radio_1.addEventListener('change', is_order_urgent_logic);
    is_order_urgent_radio_2.addEventListener('change', is_order_urgent_logic);
    is_order_urgent_radio_3.addEventListener('change', is_order_urgent_logic);
}

function is_graphic_final_logic(event) {
    // if checked and value = no
    // show client_graphics_text_textarea   
    // if checked and value = yes or else
    // hide client_graphics_text_textarea
    debugger;
    if (event.target.checked && event.target.value == 'no') {
        $(client_graphics_text_textarea).closest('.form-part').show();
    } else {
        $(client_graphics_text_textarea).closest('.form-part').hide();
    }
}

function need_to_order_logic(event) {
    // if value = כן
    // show products_from_the_client_input, hide products_order
    // if value = לא
    // show products_order, hide products_from_the_client_input
    // to show and hide the parent with class = "col-md-7 mb-3" can be few levels up
    if (event.target.value === 'כן') {
        $(products_from_the_client_input).closest('.form-part').hide();
        $(products_order).closest('.form-part').show();
    }
    else if (event.target.value === 'לא') {
        $(products_order).closest('.form-part').hide();
        $(products_from_the_client_input).closest('.form-part').show();
    }else{
        $(products_order).closest('.form-part').hide();
        $(products_from_the_client_input).closest('.form-part').hide();
    }
}
function need_to_print_logic(event) {
    // if value = כן
    // show need_to_order_products_select_input, hide need_to_cut_checkbox_input
    // if value = לא
    // show need_to_cut_checkbox_input, hide need_to_order_products_select_input
    // to show and hide the parent with class = "col-md-7 mb-3" can be few levels up
    debugger;
    if (event.target.value === 'כן, אני רוצה שתדפיסו לי על סחורה') {
        $(need_to_order_products_select_input).closest('.form-part').show();
        $(need_to_cut_checkbox_input).closest('.form-part').hide();
    } else if (event.target.value === 'לא, אני צריך רק חומרים') {
        $(need_to_order_products_select_input).closest('.form-part').hide();
        $(need_to_cut_checkbox_input).closest('.form-part').show();
    }
    else {
        $(need_to_order_products_select_input).closest('.form-part').hide();
        $(need_to_cut_checkbox_input).closest('.form-part').hide();
    }
}