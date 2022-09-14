<template>

  <div class="wrapper_books-page">

    <div class="books-page">

      <div class="navbar">
        <div class="navbar__back-button"
             @click="$router.push('./')"
        >
          <div class="navbar__back-button__img">
            <arrow-left-outlined/>
          </div>
          <p
              class="navbar__back-button__text"
          >Назад</p>
        </div>
      </div>


      <transition name="fade" mode="out-in" appear>
        <h1
            class="books-page__title"
        >В мире книг</h1>
      </transition>

      <div
          class="books-page__content__wrapper"
      >
        <div
            class="books-page__books"
        >
          <div class="books-page__fields__title">
            <p style="opacity: 1; cursor: default">Книги</p>
          </div>

          <div class="books-page__fields__list">


            <div class="books-page__fields__list__item nested"
                 v-for="book in books" :key="book"
                 @dragenter.prevent
                 @dragover.prevent
                 @drop="dropItem($event)"
            >
              <div :class="`books-page__book-item ${book.type}`"
                   :id="`book-${book.id}`"
                   draggable="true"
                   @dragstart="dragItem($event)"
                   @dragenter.prevent
                   @dragover.prevent
                   @drop.stop
              >
                <div style="position: absolute; top: 50%; bottom: 50%; left: 20px;">
                  <holder-outlined/>
                </div>
                <div
                    class="books-page__fields__list__item__check"
                >
                  <check-square-outlined/>
                </div>
                <div
                    class="books-page__fields__list__item__warn"
                >
                  <warning-outlined/>
                </div>
                <img :src="require(`../assets/${book.name}.png`)" :alt="`${book}`" draggable="false">
              </div>
            </div>

          </div>

        </div>

        <div
            class="books-page__fields"
        >
          <div class="books-page__fields__list">
            <div>
              <p class="books-page__fields__title">Жанры фольклора</p>
              <div class="books-page__fields__list__item falk-list"
                   v-for="index in 6" :key="index"
                   @dragenter.prevent
                   @dragover.prevent
                   @drop="dropItem($event)"
              ></div>
            </div>

            <div>
              <p class="books-page__fields__title">Не являются жанрами фольклора</p>

              <div
                  class="books-page__fields__list__item idk-list"
                  v-for="index in 6" :key="index"
                  @dragover="allowDrop($event)"
                  @dragenter.prevent
                  @dragover.prevent
                  @drop="dropItem($event)"
              >
              </div>

            </div>
          </div>

        </div>
      </div>

      <div
          class="books-page__footer-wrapper"
      >
        <button
            @click="checkBooks()"
        >Проверить
        </button>
      </div>
    </div>

    <div
        class="footer"
    >
      <img src="../assets/cat.png" alt="cat">
    </div>

  </div>
</template>


<script lang="ts">
import {defineComponent} from "vue";
import {ArrowLeftOutlined, HolderOutlined, CheckSquareOutlined, WarningOutlined} from '@ant-design/icons-vue';

interface DataInt {
  books: any[],
  bookToTransfer: string,
  draggedParent: any,
}

export default defineComponent({
  name: "BooksPage",
  components: {
    ArrowLeftOutlined,
    HolderOutlined,
    CheckSquareOutlined,
    WarningOutlined,
  },
  data(): DataInt {
    return {
      books: [
        {id: 1, name: "book1", type: "falk"},
        {id: 2, name: "book2", type: "falk"},
        {id: 3, name: "book3", type: "idk"},
        {id: 4, name: "book4", type: "falk"},
        {id: 5, name: "book5", type: "idk"},
        {id: 6, name: "book6", type: "idk"},
      ],
      bookToTransfer: "",
      draggedParent: null,
    }
  },
  methods: {
    allowDrop(e: any) {
      e.preventDefault();
    },
    dragItem(e: any) {
      e.dataTransfer.setData("text", e.target.id)
      this.bookToTransfer = e.dataTransfer.getData("text")
      this.draggedParent = e.target.parentElement
    },
    dragItemDisStyle() {
      if (this.draggedParent) {
        this.draggedParent.classList.remove("nested")
      }
    },
    dropItem(e: any) {
      e.preventDefault();
      if (
          e.target === this.draggedParent
          ||
          e.target.children.length > 0
      ) {
        return
      } else {
        e.target.appendChild(document.getElementById(this.bookToTransfer))
        e.currentTarget.classList.add("nested")
        this.dragItemDisStyle()
      }
    },
    checkBooks() {
      let falkList = document.getElementsByClassName("falk-list")
      let idkList = document.getElementsByClassName("idk-list")

      let falkBooks = document.getElementsByClassName("falk")
      let idkBooks = document.getElementsByClassName("idk")

      /*console.log(falkList.length) // ,method for array
      for (let list = 0; list < falkList.length; list++) {
        console.log(falkList[list])
        if (falkList[list].hasChildNodes()) {
          console.log(`child`)
          if (falkList[list].children[0].classList.value.indexOf("falk") !== -1) {
            console.log("ok")
            falkList[list].classList.add("ok")
          } else {
            console.log("bad")
            falkList[list].classList.add("bad")
          }
        }
      }*/

      for (let book = 0; book < falkBooks.length; book++) {
        console.log(falkList[book])
        if (falkBooks[book].classList.value.indexOf("ok") !== -1) {
          falkBooks[book].classList.remove("ok")
        }
        if (falkBooks[book].classList.value.indexOf("bad") !== -1) {
          falkBooks[book].classList.remove("bad")
        }
        if (falkBooks[book].parentElement!.classList.value.indexOf("falk-list") !== -1) {
          console.log("ok")
          falkBooks[book].classList.add("ok")
        } else {
          console.log("bad")
          falkBooks[book].classList.add("bad")
        }
      }

      for (let book = 0; book < idkBooks.length; book++) {
        console.log(idkBooks[book])
        if (idkBooks[book].classList.value.indexOf("ok") !== -1) {
          idkBooks[book].classList.remove("ok")
        }
        if (idkBooks[book].classList.value.indexOf("bad") !== -1) {
          idkBooks[book].classList.remove("bad")
        }
        if (idkBooks[book].parentElement!.classList.value.indexOf("idk-list") !== -1) {
          console.log("ok")
          idkBooks[book].classList.add("ok")
        } else {
          console.log("bad")
          idkBooks[book].classList.add("bad")
        }
      }
    }
  }
})
</script>


<style lang="scss" scoped>
@import "../style.scss";

.wrapper_books-page {
  width: 100%;
  background: #ECF6E9;

  .books-page {
    margin: 0 auto;
    max-width: $maxWrapperWidth;
    min-width: $mediumWrapperWidth;
    background: white;

    .books-page__book-item {
      @include display-flex-centred;

      width: 100%;
      height: 100%;

      .books-page__fields__list__item__warn,
      .books-page__fields__list__item__check {
        position: absolute;
        top: 20px;
        right: 20px;
        color: #46B755;
        opacity: 0;
      }

      .books-page__fields__list__item__warn {
        color: #F93232;
      }


      &.ok {
        border-left: 2px solid #46B755;
        box-shadow: 0px 4px 4px rgba(12, 110, 214, 0.16);
        border-radius: 12px;

        .books-page__fields__list__item__check {
          opacity: 1;
        }
      }

      &.bad {
        border-left: 2px solid #F93232;
        box-shadow: 0px 4px 4px rgba(12, 110, 214, 0.16);
        border-radius: 12px;

        .books-page__fields__list__item__warn {
          opacity: 1;
        }
      }
    }

    .books-page__title {
      @include display-flex-centred;

      width: 94%;
      margin: 0 auto;
      color: white;
      background: linear-gradient(90deg, #3F8CFF 0.06%, #60B9A6 99.94%);
      padding: 40px 16px;
      height: 128px;
      box-shadow: 0px 14px 16px rgba(12, 110, 214, 0.25);
      border-radius: 24px;
    }

    .books-page__footer-wrapper {
      @include display-flex-centred;

      justify-content: start;
      width: 90%;
      margin: 0 auto;
      height: 110px;

      button {
        @include green-button
      }
    }

    .books-page__content__wrapper {
      display: grid;
      grid-template-columns: 50% 50%;
      margin-top: 24px;

      .books-page__fields__title {
        @include display-flex-centred;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        width: 100%;
        text-align: center;
      }

      .books-page__fields__list {
        @include display-flex-centred;
        flex-wrap: wrap;

        .books-page__fields__list__item {
          width: 280px;
          height: 280px;
          background: #F2F2F2;
          border: 1px dashed #B0B2C1;
          border-radius: 12px;
          margin: 16px;

          &.nested {
            @include display-flex-centred;

            cursor: grab;
            position: relative;
            //padding: 24px 12px;
            background: #FFFFFF;
            box-shadow: 0px 4px 4px rgba(12, 110, 214, 0.16);
            border-radius: 12px;
            border: none;
          }
        }
      }


    }
  }
}

// NAVBAR
.navbar {
  @include display-flex-centred;

  justify-content: start;
  height: 80px;
  background: white;
  box-shadow: 0px 4px 4px rgba(12, 110, 214, 0.16);
  border-radius: 8px;

  .navbar__back-button {
    @include display-flex-centred;
    color: white;
    display: flex;
    margin: 10px 60px;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
      transform: scale(1.05);
    }

    .navbar__back-button__img {
      @include display-flex-centred;

      background: #8BD74B;
      width: 36px;
      height: 36px;
      border-radius: 40px;
    }

    .navbar__back-button__text {
      color: #8BD74B;
      font-weight: 400;
      font-size: 18px;
      line-height: 140%;
      margin-left: 8px;
    }
  }
}

// FOOTER
.footer {
  //position: absolute;
  bottom: 0;
  height: 280px;
  width: 100%;
  min-width: $mediumWrapperWidth;
  display: flex;
  justify-content: end;
  align-items: end;
  background: #ECF6E9;

  img {
    display: block;
    height: 260px;
  }
}

</style>