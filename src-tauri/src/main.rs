#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use csv::ReaderBuilder;

#[tauri::command]
fn read(filepath: &str) -> Vec<Vec<String>> {
    let mut records = vec![];
    let mut rdr = ReaderBuilder::new()
        .has_headers(false)
        .from_path(filepath)
        .unwrap();
    for record in rdr.records() {
        let rec = record
            .unwrap()
            .iter()
            .map(|x| x.to_string())
            .collect::<Vec<String>>();
        records.push(rec);
    }
    records
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![read])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
