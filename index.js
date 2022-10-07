window.onload = () => {

    const dataTablesLang = {

        "sEmptyTable": "Nessun dato presente nella tabella",
        "sInfo": "Vista da _START_ a _END_ di _TOTAL_ elementi",
        "sInfoEmpty": "Vista da 0 a 0 di 0 elementi",
        "sInfoFiltered": "(filtrati da _MAX_ elementi totali)",
        "sInfoPostFix": "",
        "sInfoThousands": ".",
        "sLengthMenu": "Visualizza _MENU_ elementi",
        "sLoadingRecords": "Caricamento...",
        "sProcessing": "Elaborazione...",
        "sSearch": "Cerca:",
        "sZeroRecords": "La ricerca non ha portato alcun risultato.",

        "oPaginate": {
            "sFirst": "Inizio",
            "sPrevious": "<<",
            "sNext": ">>",
            "sLast": "Fine"
        },

        "oAria": {
            "sSortAscending": ": attiva per ordinare la colonna in ordine crescente",
            "sSortDescending": ": attiva per ordinare la colonna in ordine decrescente"
        }

    }

    const loadtable = () => {

        $.fn.dataTable.moment('D/M/YYYY HH:mm');

        const table = $('#table-id').DataTable();
        table.clear().destroy();

        $('#table-id').dataTable({
            oLanguage: dataTablesLang,
            "scrollX": true,
            "order": [0, "asc"],
            'columnDefs': [
                {
                    targets: 0,
                    "width": "5%"
                },
                {
                    targets: 3,
                    type: 'datetime-moment'
                }
            ],
            ajax: {
                type: 'GET',
                url: `./api/xlsxToJSON.php`
            }
        });

        setTimeout(() => {
            const table = $('#table-id').DataTable();
            table.columns.adjust().draw();
        }, "1000");

    }

    loadtable()

}