import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { libraryService } from '../../../Services/library.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-playlist',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './form-playlist.component.html',
  styleUrl: './form-playlist.component.css',
})
export class FormPlaylistComponent {
  playListService = inject(libraryService);

  form = new FormGroup({
    Name: new FormControl<string | null>(''),
    Description: new FormControl<string | null>(''),
    Image: new FormControl<File | null>(null),
  });
  onChangeImage(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.form.patchValue({
        Image: input.files[0],
      });
    }
  }

  onSave() {
    this.playListService.onSave(
      this.form.controls.Name.value!,
      this.form.controls.Description.value!,
      this.form.controls.Image.value?.name!
    );
    // window.location.reload();
    console.log(this.form.controls.Image);
  }
}
