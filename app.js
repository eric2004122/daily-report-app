const weatherOptions = ["晴", "陰", "雨", "颱風"];
const photoCompression = {
  maxWidth: 1800,
  maxHeight: 1350,
  quality: 0.82,
  mimeType: "image/jpeg"
};

const defaultState = {
  meta: {
    title: "安勤科技營運總部大樓新建工程",
    reportDate: "115年6月30日 星期二",
    projectName: "安勤科技(股)公司營運總部新建工程",
    contractor: "立華營造股份有限公司",
    permitNo: "114中建字第00259號",
    startDate: "115年3月30日",
    completionDate: "117年10月5日",
    plannedProgress: "10.10%",
    actualProgress: "10.10%",
    sourceUrl: "https://dailyreport.suiqui.com/#/tabs/overview/20260630"
  },
  weather: {
    morning: "晴",
    afternoon: "晴"
  },
  displayOptions: {
    showZeroLaborRows: false,
    showZeroMaterialRows: false
  },
  workToday: [
    "連續壁第41單元挖掘及自主檢查改善",
    "機電3相220V電配置拉線作業",
    "連續壁-解壓井接電施作、連續壁鋼筋籠組立及調整",
    "安全觀測-例行安全觀測作業"
  ],
  workTomorrow: [
    "連續壁第41單元挖掘及自主檢查改善",
    "連續壁-解壓井接電施作"
  ],
  laborGroups: [
    {
      title: "契約工",
      rows: [
        ["工務所（人）", "6", "710.50"],
        ["公司工（工）", "0", "18"],
        ["鄰房鑑定（工）", "0", "0"],
        ["施工圍籬（工）", "0", "24"],
        ["安全觀測（工）", "1", "12"],
        ["拆除/清運（工）", "0", "3"],
        ["放樣（工）", "0", "9"],
        ["水電（工）", "3", "146"],
        ["點井（工）", "0", "7"],
        ["預壘樁（工）", "0", "0"],
        ["安全支撐（工）", "0", "0"],
        ["土方（工）", "0", "11"],
        ["鋼筋綁紮（工）", "0", "0"],
        ["鋼筋續接（工）", "0", "0"],
        ["模板（工）", "0", "0"],
        ["混凝土壓送（工）", "0", "7"],
        ["晶化地坪/整體粉光（工）", "0", "0"],
        ["鷹架（工）", "0", "0"],
        ["防水/透水PC（工）", "0", "0"],
        ["泥作（工）", "0", "0"],
        ["石材（工）", "0", "0"],
        ["打石（工）", "0", "0"],
        ["組工（工）", "0", "0"],
        ["土木技師公會鄰房鑑定（工）", "0", "13"],
        ["截水溝（工）", "0", "6"]
      ]
    },
    {
      title: "契約工2",
      rows: [
        ["日式大門/圍籬（工）", "0", "14"],
        ["電梯（工）", "0", "0"],
        ["輕隔間（工）", "0", "0"],
        ["鋁門窗（工）", "0", "0"],
        ["防火門（工）", "0", "0"],
        ["鐵捲門/防水閘門（工）", "0", "0"],
        ["鋁格柵（工）", "0", "0"],
        ["玻璃/矽利康（工）", "0", "0"],
        ["油漆（工）", "0", "0"],
        ["防火漆（工）", "0", "0"],
        ["景觀植栽（工）", "0", "0"],
        ["EPOXY地坪（工）", "0", "0"],
        ["AC/圍牆土木（工）", "0", "48"],
        ["重型架（工）", "0", "0"],
        ["安全欄杆（工）", "0", "1"],
        ["鋼構（工）", "0", "0"],
        ["帷幕（工）", "0", "0"],
        ["空調（工）", "0", "0"],
        ["搗擺/木扶手（工）", "0", "0"],
        ["屋頂浪板（工）", "0", "0"],
        ["太陽能（工）", "0", "0"],
        ["停車設備/廣告看板（工）", "0", "0"],
        ["外牆清洗/細清/結構體粗清（工）", "0", "0"],
        ["水溝清潔（工）", "0", "0"],
        ["組合屋（工）", "0", "28"],
        ["美化/隔音帆布（工）", "0", "13"],
        ["連續壁（工）", "11", "347"]
      ]
    },
    {
      title: "機具車輛",
      rows: [
        ["吊車（台）", "0", "1"],
        ["泵車（台）", "0", "0"],
        ["營建廢棄物卡車（台）", "0", "0"],
        ["挖土機/鑽掘機（台）", "0", "6"],
        ["推土機山貓（台）", "0", "0"],
        ["卡車（台）", "0", "8"],
        ["水車（台）", "0", "0"],
        ["推高機（台）", "0", "0"],
        ["其他拖車（台）", "0", "0"],
        ["50噸吊車（台）", "0", "4"],
        ["90噸吊車（輛）", "0", "1"],
        ["70噸吊車（車）", "0", "2"]
      ]
    }
  ],
  materialGroups: [
    {
      title: "鋼筋",
      rows: [
        ["鋼筋SD420(W)（T）", "0", "176.22"],
        ["鋼筋SD280(W)（T）", "0", "0"],
        ["鋼線網（M2）", "0", "90"],
        ["續接器（個）", "0", "0"]
      ]
    },
    {
      title: "混凝土",
      rows: [
        ["2000PSI（M3）", "0", "73.50"],
        ["3000PSI（M3）", "0", "965"],
        ["4000PSI（M3）", "0", "27"],
        ["PC（M3）", "0", "0"]
      ]
    },
    {
      title: "水泥與砂",
      rows: [
        ["散裝水泥（T）", "0", "70"],
        ["袋裝水泥（包）", "0", "0"],
        ["砂（M3）", "0", "0"],
        ["紅磚（塊）", "0", "0"],
        ["黏著劑（包）", "0", "0"],
        ["乾拌水泥砂（包）", "0", "0"],
        ["填縫劑（包）", "0", "0"],
        ["外牆磁磚加工（支）", "0", "0"],
        ["外牆磁磚（支）", "0", "0"]
      ]
    },
    {
      title: "其他材料",
      rows: [
        ["營建廢棄物（M3）", "0", "39"],
        ["鋪路鐵板（片）", "0", "5"],
        ["其他（個）", "0", "0"],
        ["生活垃圾（車）", "0", "3"],
        ["土方（M3）", "0", "112"]
      ]
    }
  ],
  notes: "",
  instructions: "",
  siteManager: "",
  preparedBy: "",
  photos: [
    { caption: "安全觀測收測(建物傾度盤)", image: "" },
    { caption: "連續壁鋼筋籠組立及調整", image: "" },
    { caption: "鋼筋籠自主檢查", image: "" },
    { caption: "鋼筋籠自主檢查", image: "" },
    { caption: "連續壁開挖深度檢測", image: "" },
    { caption: "安全觀測收測(路面沉陷點)", image: "" }
  ]
};

let state = loadState();
let previewZoom = 1;
let userAdjustedPreviewZoom = false;
let previewMode = "daily";

const metaFieldDefs = [
  ["title", "工程標題"],
  ["reportDate", "填表日期"],
  ["projectName", "工程名稱"],
  ["contractor", "承造人"],
  ["permitNo", "建照號碼"],
  ["startDate", "開工日期"],
  ["completionDate", "核定竣工日期"],
  ["plannedProgress", "預定進度(%)"],
  ["actualProgress", "實際進度(%)"],
  ["sourceUrl", "頁尾網址"]
];
const dateMetaFields = new Set(["reportDate", "startDate", "completionDate"]);

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadState() {
  try {
    const saved = localStorage.getItem("daily-report-state");
    return saved ? mergeState(clone(defaultState), JSON.parse(saved)) : clone(defaultState);
  } catch {
    return clone(defaultState);
  }
}

function mergeState(base, saved) {
  Object.keys(saved || {}).forEach((key) => {
    if (Array.isArray(saved[key])) base[key] = saved[key];
    else if (saved[key] && typeof saved[key] === "object") base[key] = { ...base[key], ...saved[key] };
    else base[key] = saved[key];
  });
  return base;
}

function persist() {
  try {
    localStorage.setItem("daily-report-state", JSON.stringify(state));
  } catch {
    console.warn("Local storage is full. The report still works, but photos may not persist after refresh.");
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function numberedLines(lines) {
  return lines
    .filter((line) => String(line).trim())
    .map((line, index) => `${index + 1}.${line}`)
    .join("\n");
}

function weatherMarks(selected) {
  return weatherOptions.map((item) => `${item === selected ? "■" : "□"}${item}`).join(" ");
}

function rocDateToIso(value) {
  const match = String(value ?? "").match(/(\d+)\D+(\d+)\D+(\d+)/);
  if (!match) return "";
  const year = Number(match[1]) + 1911;
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (!year || !month || !day) return "";
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function isoToRocDate(value, includeWeekday = false) {
  if (!value) return "";
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return "";
  const date = new Date(year, month - 1, day);
  const rocDate = `${year - 1911}年${month}月${day}日`;
  if (!includeWeekday) return rocDate;
  return `${rocDate} 星期${"日一二三四五六"[date.getDay()]}`;
}

function wireInput(input, setter) {
  input.addEventListener("input", () => {
    setter(input.value);
    persist();
    renderPreview();
  });
}

function renderEditor() {
  renderMetaEditor();
  renderLineEditor("todayWorkList", state.workToday, renderEditor);
  renderLineEditor("tomorrowWorkList", state.workTomorrow, renderEditor);
  renderGroupEditor("laborEditor", state.laborGroups, renderEditor);
  renderGroupEditor("materialEditor", state.materialGroups, renderEditor);
  renderPhotoEditor();

  document.getElementById("morningWeather").value = state.weather.morning;
  document.getElementById("afternoonWeather").value = state.weather.afternoon;
  document.getElementById("notes").value = state.notes;
  document.getElementById("instructions").value = state.instructions;
  document.getElementById("siteManager").value = state.siteManager;
  document.getElementById("preparedBy").value = state.preparedBy;
  updateZeroLaborToggle();
  updateZeroMaterialToggle();
}

function renderMetaEditor() {
  const mount = document.getElementById("metaFields");
  mount.innerHTML = metaFieldDefs
    .map(([key, label]) => {
      if (dateMetaFields.has(key)) {
        return `<label>${label}<input data-date-meta="${key}" type="date" value="${escapeHtml(rocDateToIso(state.meta[key]))}" /></label>`;
      }
      return `<label>${label}<input data-meta="${key}" type="text" value="${escapeHtml(state.meta[key])}" /></label>`;
    })
    .join("");
  mount.querySelectorAll("[data-meta]").forEach((input) => {
    wireInput(input, (value) => {
      state.meta[input.dataset.meta] = value;
    });
  });
  mount.querySelectorAll("[data-date-meta]").forEach((input) => {
    input.addEventListener("input", () => {
      const key = input.dataset.dateMeta;
      state.meta[key] = isoToRocDate(input.value, key === "reportDate");
      persist();
      renderPreview();
    });
  });
}

function renderLineEditor(id, lines, rerender) {
  const mount = document.getElementById(id);
  mount.innerHTML = lines
    .map((line, index) => {
      return `
        <div class="line-row">
          <input data-line-index="${index}" type="text" value="${escapeHtml(line)}" />
          <button class="row-btn" data-remove-line="${index}" type="button">刪除</button>
        </div>`;
    })
    .join("");

  mount.querySelectorAll("[data-line-index]").forEach((input) => {
    wireInput(input, (value) => {
      lines[Number(input.dataset.lineIndex)] = value;
    });
  });

  mount.querySelectorAll("[data-remove-line]").forEach((button) => {
    button.addEventListener("click", () => {
      lines.splice(Number(button.dataset.removeLine), 1);
      persist();
      rerender();
      renderPreview();
    });
  });
}

function renderGroupEditor(id, groups, rerender) {
  const mount = document.getElementById(id);
  mount.innerHTML = groups
    .map((group, groupIndex) => {
      const rows = group.rows
        .map((row, rowIndex) => {
          return `
            <tr>
              <td class="name-cell"><input data-row-name="${groupIndex}:${rowIndex}" value="${escapeHtml(row[0])}" /></td>
              <td class="unit-cell"><input data-row-unit="${groupIndex}:${rowIndex}" value="${escapeHtml(row[3] || "")}" /></td>
              <td><input data-row-today="${groupIndex}:${rowIndex}" value="${escapeHtml(row[1])}" /></td>
              <td><input data-row-total="${groupIndex}:${rowIndex}" value="${escapeHtml(row[2])}" /></td>
              <td><button class="row-btn" data-remove-row="${groupIndex}:${rowIndex}" type="button">刪</button></td>
            </tr>`;
        })
        .join("");

      return `
        <div class="group-editor">
          <h3>
            <span>${escapeHtml(group.title)}</span>
            <button class="small-btn" data-add-row="${groupIndex}" type="button">新增列</button>
          </h3>
          <table class="edit-table">
            <thead><tr><th>名稱</th><th>單位</th><th>本日</th><th>累計</th><th></th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>`;
    })
    .join("");

  mount.querySelectorAll("[data-row-name]").forEach((input) => {
    wireInput(input, (value) => {
      const [groupIndex, rowIndex] = input.dataset.rowName.split(":").map(Number);
      groups[groupIndex].rows[rowIndex][0] = value;
    });
  });

  mount.querySelectorAll("[data-row-today]").forEach((input) => {
    wireInput(input, (value) => {
      const [groupIndex, rowIndex] = input.dataset.rowToday.split(":").map(Number);
      groups[groupIndex].rows[rowIndex][1] = value;
    });
  });

  mount.querySelectorAll("[data-row-unit]").forEach((input) => {
    wireInput(input, (value) => {
      const [groupIndex, rowIndex] = input.dataset.rowUnit.split(":").map(Number);
      groups[groupIndex].rows[rowIndex][3] = value;
    });
  });

  mount.querySelectorAll("[data-row-total]").forEach((input) => {
    wireInput(input, (value) => {
      const [groupIndex, rowIndex] = input.dataset.rowTotal.split(":").map(Number);
      groups[groupIndex].rows[rowIndex][2] = value;
    });
  });

  mount.querySelectorAll("[data-add-row]").forEach((button) => {
    button.addEventListener("click", () => {
      groups[Number(button.dataset.addRow)].rows.push(["", "0", "0", ""]);
      persist();
      rerender();
      renderPreview();
    });
  });

  mount.querySelectorAll("[data-remove-row]").forEach((button) => {
    button.addEventListener("click", () => {
      const [groupIndex, rowIndex] = button.dataset.removeRow.split(":").map(Number);
      groups[groupIndex].rows.splice(rowIndex, 1);
      persist();
      rerender();
      renderPreview();
    });
  });
}

function renderPhotoEditor() {
  const mount = document.getElementById("photoEditor");
  mount.innerHTML = state.photos
    .map((photo, index) => {
      return `
        <div class="photo-row">
          ${photo.image ? `<img class="photo-thumb" src="${photo.image}" alt="照片 ${index + 1}" />` : `<div class="photo-thumb"></div>`}
          <div class="photo-fields">
            <input data-photo-caption="${index}" type="text" value="${escapeHtml(photo.caption)}" aria-label="照片 ${index + 1} 說明" />
            <input data-photo-file="${index}" type="file" accept="image/*" aria-label="上傳照片 ${index + 1}" />
          </div>
          <div class="photo-actions">
            <button class="row-btn" data-clear-photo="${index}" type="button">清除</button>
            <button class="row-btn" data-remove-photo="${index}" type="button">刪除</button>
          </div>
        </div>`;
    })
    .join("");

  mount.querySelectorAll("[data-photo-caption]").forEach((input) => {
    wireInput(input, (value) => {
      state.photos[Number(input.dataset.photoCaption)].caption = value;
    });
  });

  mount.querySelectorAll("[data-photo-file]").forEach((input) => {
    input.addEventListener("change", async () => {
      const file = input.files[0];
      if (!file) return;

      input.disabled = true;
      try {
        const photoIndex = Number(input.dataset.photoFile);
        const compressed = await compressImageFile(file);
        state.photos[photoIndex].image = compressed.dataUrl;
        state.photos[photoIndex].originalName = file.name;
        state.photos[photoIndex].compressedBytes = compressed.bytes;
        persist();
        renderPhotoEditor();
        renderPreview();
      } catch (error) {
        alert(`照片壓縮失敗：${error.message || "請換一張照片再試一次。"}`);
      } finally {
        input.disabled = false;
        input.value = "";
      }
    });
  });

  mount.querySelectorAll("[data-clear-photo]").forEach((button) => {
    button.addEventListener("click", () => {
      state.photos[Number(button.dataset.clearPhoto)].image = "";
      persist();
      renderPhotoEditor();
      renderPreview();
    });
  });

  mount.querySelectorAll("[data-remove-photo]").forEach((button) => {
    button.addEventListener("click", () => {
      state.photos.splice(Number(button.dataset.removePhoto), 1);
      persist();
      renderPhotoEditor();
      renderPreview();
    });
  });
}

function compressImageFile(file) {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith("image/")) {
      reject(new Error("請選擇圖片檔。"));
      return;
    }

    const image = new Image();
    const objectUrl = URL.createObjectURL(file);

    image.onload = () => {
      URL.revokeObjectURL(objectUrl);
      try {
        const sourceWidth = image.naturalWidth || image.width;
        const sourceHeight = image.naturalHeight || image.height;
        if (!sourceWidth || !sourceHeight) {
          reject(new Error("無法讀取圖片尺寸。"));
          return;
        }

        const scale = Math.min(
          photoCompression.maxWidth / sourceWidth,
          photoCompression.maxHeight / sourceHeight,
          1
        );
        const targetWidth = Math.max(1, Math.round(sourceWidth * scale));
        const targetHeight = Math.max(1, Math.round(sourceHeight * scale));
        const canvas = document.createElement("canvas");
        canvas.width = targetWidth;
        canvas.height = targetHeight;

        const context = canvas.getContext("2d");
        context.fillStyle = "#fff";
        context.fillRect(0, 0, targetWidth, targetHeight);
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";
        context.drawImage(image, 0, 0, targetWidth, targetHeight);

        const dataUrl = canvas.toDataURL(photoCompression.mimeType, photoCompression.quality);
        resolve({
          dataUrl,
          bytes: estimateDataUrlBytes(dataUrl)
        });
      } catch (error) {
        reject(error);
      }
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("無法讀取圖片檔。"));
    };

    image.src = objectUrl;
  });
}

function estimateDataUrlBytes(dataUrl) {
  const base64 = dataUrl.split(",")[1] || "";
  return Math.round((base64.length * 3) / 4);
}

function metaHeader() {
  const m = state.meta;
  return `
    <h2 class="report-title">${escapeHtml(m.title)}</h2>
    <div class="report-meta-line">
      <div class="weather">天氣：　上午: ${weatherMarks(state.weather.morning)}　下午: ${weatherMarks(state.weather.afternoon)}</div>
      <div>填表日期：　${escapeHtml(m.reportDate)}</div>
    </div>
    <table class="meta-table">
      <tbody>
        <tr>
          <th>工程名稱</th><td>${escapeHtml(m.projectName)}</td>
          <th>承造人</th><td>${escapeHtml(m.contractor)}</td>
        </tr>
        <tr>
          <th>建照號碼</th><td>${escapeHtml(m.permitNo)}</td>
          <th></th><td></td>
        </tr>
        <tr>
          <th>開工日期</th><td>${escapeHtml(m.startDate)}</td>
          <th>核定竣工日期</th><td>${escapeHtml(m.completionDate)}</td>
        </tr>
        <tr>
          <th>預定進度(%)</th><td>${escapeHtml(m.plannedProgress)}</td>
          <th>實際進度(%)</th><td>${escapeHtml(m.actualProgress)}</td>
        </tr>
      </tbody>
    </table>`;
}

function groupTable(group, targetRows = 0) {
  const rows = [...group.rows];
  while (rows.length < targetRows) rows.push(["", "", "", ""]);

  return `
    <table class="report-data">
      <thead>
        <tr><th>名稱</th><th>本日數量</th><th>累計數量</th></tr>
        <tr><th class="group-head" colspan="3">${escapeHtml(group.title)}</th></tr>
      </thead>
      <tbody>
        ${rows
          .map((row) => {
            return `<tr><td class="name">${escapeHtml(row[0])}</td><td>${escapeHtml(row[1])}</td><td>${escapeHtml(cumulativeWithToday(row[1], row[2]))}</td></tr>`;
          })
          .join("")}
      </tbody>
    </table>`;
}

function cumulativeWithToday(todayValue, totalValue) {
  const today = parseQuantity(todayValue);
  const total = parseQuantity(totalValue);
  const hasToday = String(todayValue ?? "").trim() !== "";
  const hasTotal = String(totalValue ?? "").trim() !== "";

  if (!hasToday && !hasTotal) return "";
  if (today === null || total === null) return totalValue ?? "";

  const decimals = Math.max(decimalPlaces(todayValue), decimalPlaces(totalValue));
  return formatQuantity(today + total, decimals);
}

function parseQuantity(value) {
  const text = String(value ?? "").trim().replaceAll(",", "");
  if (!text) return 0;
  const number = Number(text);
  return Number.isFinite(number) ? number : null;
}

function decimalPlaces(value) {
  const text = String(value ?? "").trim().replaceAll(",", "");
  const decimal = text.split(".")[1];
  return decimal ? decimal.length : 0;
}

function formatQuantity(value, decimals) {
  if (decimals > 0) return value.toFixed(decimals);
  return String(Math.round(value * 1000000) / 1000000);
}

function groupTableForReport(group) {
  return groupTable({
    ...group,
    rows: group.rows.filter((row) => shouldShowQuantityRow(row))
  });
}

function shouldShowQuantityRow(row) {
  return quantityRowHasAnyValue(row);
}

function shouldShowLaborRow(row) {
  if (state.displayOptions?.showZeroLaborRows) return String(row?.[0] ?? "").trim() !== "";
  return shouldShowQuantityRow(row);
}

function shouldShowMaterialRow(row) {
  if (state.displayOptions?.showZeroMaterialRows) return row.some((value) => String(value ?? "").trim() !== "");
  return shouldShowQuantityRow(row);
}

function renderPreview() {
  if (previewMode === "constructionLog") {
    renderConstructionLogPreview();
    return;
  }

  const reportLaborGroups = state.laborGroups
    .map((group) => ({ ...group, rows: group.rows.filter((row) => shouldShowLaborRow(row)) }))
    .filter((group) => group.rows.length);
  const reportMaterialGroups = state.materialGroups
    .map((group) => ({ ...group, rows: group.rows.filter((row) => shouldShowMaterialRow(row)) }))
    .filter((group) => group.rows.length);
  const photosForReport = state.photos.filter((photo) => photo.image);
  const photoPages = chunkPhotos(photosForReport, 6);
  const reportBlocks = buildMainReportBlocks(reportLaborGroups, reportMaterialGroups);
  const mainPages = paginateReportBlocks(reportBlocks);
  const totalPages = mainPages.length + photoPages.length;

  document.getElementById("reportPreview").innerHTML = `
    ${mainPages
      .map((blocks, pageIndex) => reportPage(blocks.join(""), pageIndex + 1, totalPages))
      .join("")}
    ${photoPages
      .map((photos, pageIndex) => {
        const pageNumber = mainPages.length + pageIndex + 1;
        const photoBody = `<div class="photo-grid-report">${photos
          .map((photo, index) => photoCell(photo, pageIndex * 6 + index))
          .join("")}</div>`;
        return reportPage(photoBody, pageNumber, totalPages, "photo-report-body");
      })
      .join("")}`;
}

function renderConstructionLogPreview() {
  const pages = constructionLogPages();
  document.getElementById("reportPreview").innerHTML = pages
    .map((page, index) => `
      <article class="report-page construction-log-page ${page.isFirst ? "construction-log-first-page" : "construction-log-continuation-page"}">
        ${constructionLogHtml(page, index + 1, pages.length)}
      </article>`)
    .join("");
}

function constructionLogPages() {
  const blocks = [
    ...constructionTableBlocks("一、依施工計畫書執行按圖施工概況（含約定之重要施工項目及完成數量等）：", [
      "施工項目",
      "單位",
      "契約數量",
      "本日完成數量",
      "累計完成數量",
      "備註"
    ], buildConstructionItemRows()),
    ...constructionTableBlocks("二、工地材料管理概況（含約定之重要材料使用狀況及數量等）：", [
      "材料名稱",
      "單位",
      "契約數量",
      "本日使用數量",
      "累計使用數量",
      "備註"
    ], buildConstructionMaterialRows()),
    ...constructionPeopleBlocks(buildPeopleMachineRows()),
    constructionFixedSectionsBlock()
  ];
  return paginateConstructionBlocks(blocks);
}

function paginateConstructionBlocks(blocks) {
  if (!blocks.length) return [{ isFirst: true, blocks: [constructionFixedSectionsBlock()] }];

  const measurer = document.createElement("div");
  measurer.className = "pagination-measurer";
  document.body.appendChild(measurer);

  const pages = [];
  let currentBlocks = [];

  blocks.forEach((block) => {
    const candidateBlocks = [...currentBlocks, block];
    const isFirstPage = pages.length === 0;

    if (constructionPageOverflows(measurer, {
      isFirst: isFirstPage,
      blocks: candidateBlocks
    }) && currentBlocks.length) {
      pages.push({ isFirst: isFirstPage, blocks: currentBlocks });
      currentBlocks = [block];
    } else {
      currentBlocks = candidateBlocks;
    }

    if (constructionPageOverflows(measurer, {
      isFirst: pages.length === 0,
      blocks: currentBlocks
    }) && currentBlocks.length === 1) {
      pages.push({ isFirst: pages.length === 0, blocks: currentBlocks });
      currentBlocks = [];
    }
  });

  if (currentBlocks.length) {
    pages.push({ isFirst: pages.length === 0, blocks: currentBlocks });
  }

  measurer.remove();
  return pages.length ? pages : [{ isFirst: true, blocks: [constructionFixedSectionsBlock()] }];
}

function constructionPageOverflows(container, page) {
  container.innerHTML = `
    <article class="report-page construction-log-page ${page.isFirst ? "construction-log-first-page" : "construction-log-continuation-page"}">
      ${constructionLogHtml(page, 1, 99)}
    </article>`;
  const measuringPage = container.lastElementChild;
  return measuringPage.scrollHeight > measuringPage.clientHeight + 1;
}

function constructionLogHtml(page, pageNumber, totalPages) {
  const date = rocDateParts(state.meta.reportDate);
  const permit = splitPermitNo(state.meta.permitNo);
  const headerHtml = page.isFirst
    ? `
      <div class="construction-log-head">
        <div></div>
        <h2>建築物施工日誌</h2>
        <strong>B14-4</strong>
      </div>
      <div class="construction-log-code">表報編號：</div>
      <div class="construction-log-meta">
        <span>本日天氣：上午：${escapeHtml(state.weather.morning)}</span>
        <span>下午：${escapeHtml(state.weather.afternoon)}</span>
        <span>填表日期：${escapeHtml(date.year)}年　${escapeHtml(date.month)}月　${escapeHtml(date.day)}日 (星期${escapeHtml(date.weekday)})</span>
      </div>
      <table class="construction-info-table">
        <tbody>
          <tr><th>工程名稱</th><td>${escapeHtml(state.meta.projectName)}</td><th>承造人</th><td>${escapeHtml(state.meta.contractor)}</td></tr>
          <tr><th>建雜照號碼</th><td>${escapeHtml(permit.prefix)}</td><th>字第</th><td>${escapeHtml(permit.number)}號</td></tr>
          <tr><th>開工日期</th><td>${escapeHtml(state.meta.startDate)}</td><th>核定竣工日期</th><td>${escapeHtml(state.meta.completionDate)}</td></tr>
          <tr><th>預定進度(%)</th><td>${escapeHtml(state.meta.plannedProgress)}</td><th>實際進度(%)</th><td>${escapeHtml(state.meta.actualProgress)}</td></tr>
        </tbody>
      </table>`
    : "";

  return `
    ${headerHtml}
    ${page.blocks.join("")}
    ${totalPages > 1 ? `<div class="construction-page-number">第 ${pageNumber} / ${totalPages} 頁</div>` : ""}`;
}

function constructionTableBlocks(title, headers, rows) {
  const sourceRows = rows.length ? rows : [Array(headers.length).fill("")];
  return chunkRows(sourceRows, 18).map((chunk, index) => `
    ${index ? "" : `<div class="construction-section-title">${escapeHtml(title)}</div>`}
    <table class="construction-log-table">
      <thead><tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr></thead>
      <tbody>${padRows(chunk, Math.max(5, chunk.length), headers.length).map(constructionRowHtml).join("")}</tbody>
    </table>`);
}

function constructionPeopleBlocks(rows) {
  const sourceRows = rows.length ? rows : [Array(6).fill("")];
  return chunkRows(sourceRows, 14).map((chunk, index) => `
    ${index ? "" : `<div class="construction-section-title">三、工地人員及機具管理（含約定之出工人數及機具使用情形及數量）：</div>`}
    <table class="construction-people-table">
      <thead><tr><th>工別</th><th>本日人數</th><th>累計人數</th><th>機具名稱</th><th>本日使用數量</th><th>累計使用數量</th></tr></thead>
      <tbody>${padRows(chunk, Math.max(5, chunk.length), 6).map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>`);
}

function constructionFixedSectionsBlock() {
  return `<div class="construction-text-row">四、本日施工項目是否有須依「營造業專業工程特定施工項目應置之技術士種類、比率或人數標準表」規定應設置之技術士：</div>
    <div class="construction-safety">
      <p>五、工地職業安全衛生事項之督導、公共環境與安全之維護及其他工地行政事務(註3)：</p>
      <p>(一)施工前檢查事項：</p>
      <p>1. 實施勤前教育(含工地預防災變及危害告知)：□有　□無</p>
      <p>2. 確認新進勞工是否提報勞工保險(或其他商業保險)資料及安全衛生教育訓練紀錄：□有　□無</p>
      <p>3. 檢查勞工個人防護具：□有　□無</p>
      <p>(二)其他事項：${escapeHtml(state.notes)}</p>
    </div>
    <div class="construction-fill-row">六、施工取樣試驗紀錄：</div>
    <div class="construction-fill-row">七、通知協力廠商辦理事項：${escapeHtml(state.instructions)}</div>
    <div class="construction-important-row">八、重要事項紀錄(註4)：${escapeHtml(state.notes)}</div>
    <div class="construction-sign-row">簽章：【工地主任】(註5)：${escapeHtml(state.siteManager)}</div>
    <div class="construction-notes">
      <p>註：1. 依營造業法第三十二條第一項第二款規定，工地主任應按日填報施工日誌；本表檢送地方主管建築機關備查。</p>
      <p>2. 本施工日誌格式僅供參考，原則應包含上開欄位，各主管建築機關得依工程性質及實際需要增訂之。</p>
      <p>3. 施工前檢查事項所列工作應由依職業安全衛生管理辦法規定所置職業安全衛生管理人員於每日施工前辦理。</p>
      <p>4. 重要事項紀錄包含起造人及監造人指示、工地緊急異常狀況通報處理情形及其他重要事項。</p>
      <p>5. 本工程依營造業法規定須置工地主任者，由工地主任簽章。</p>
    </div>`;
}

function constructionRowHtml(row) {
  return `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`;
}

function rocDateParts(value) {
  const match = String(value ?? "").match(/(\d+)\D+(\d+)\D+(\d+).*?星期?([日一二三四五六])?/);
  if (!match) return { year: "", month: "", day: "", weekday: "" };
  return {
    year: match[1] || "",
    month: match[2] || "",
    day: match[3] || "",
    weekday: match[4] || ""
  };
}

function splitPermitNo(value) {
  const text = String(value ?? "").trim();
  const match = text.match(/^(.*?字第)\s*(.*?)\s*號?$/);
  if (!match) return { prefix: text, number: "" };
  return {
    prefix: match[1].replace("字第", "").trim(),
    number: match[2].trim()
  };
}

function buildConstructionItemRows() {
  const quantityRows = flattenLaborRows().filter(({ row, group }) => !group.title.includes("機具") && shouldShowLaborRow(row));
  const rows = state.workToday
    .filter((line) => String(line).trim())
    .map((line) => {
      const item = cleanConstructionName(line);
      const matched = quantityRows.find(({ row }) => item && row[0].includes(item));
      const source = matched?.row || ["", "", ""];
      return [item, rowUnit(source, item), "", source[1] || "", source[2] ? cumulativeWithToday(source[1], source[2]) : "", ""];
    });

  if (!rows.length) {
    quantityRows.forEach(({ row }) => {
      rows.push([cleanConstructionName(row[0]), rowUnit(row), "", row[1], cumulativeWithToday(row[1], row[2]), ""]);
    });
  }

  return rows;
}

function buildConstructionMaterialRows() {
  return state.materialGroups
    .flatMap((group) => group.rows)
    .filter((row) => shouldShowMaterialRow(row))
    .map((row) => [cleanMaterialName(row[0]), rowUnit(row), "", row[1], cumulativeWithToday(row[1], row[2]), ""]);
}

function buildPeopleMachineRows() {
  const workerRows = flattenLaborRows()
    .filter(({ row, group }) => !group.title.includes("機具") && shouldShowLaborRow(row))
    .map(({ row }) => [cleanLaborName(row[0]), row[1], cumulativeWithToday(row[1], row[2])]);
  const machineRows = flattenLaborRows()
    .filter(({ row, group }) => group.title.includes("機具") && shouldShowLaborRow(row))
    .map(({ row }) => [cleanLaborName(row[0]), row[1], cumulativeWithToday(row[1], row[2])]);
  const count = Math.max(workerRows.length, machineRows.length, 5);
  const rows = [];

  for (let index = 0; index < count; index += 1) {
    const worker = workerRows[index] || ["", "", ""];
    const machine = machineRows[index] || ["", "", ""];
    rows.push([worker[0], worker[1], worker[2], machine[0], machine[1], machine[2]]);
  }

  return rows;
}

function flattenLaborRows() {
  return state.laborGroups.flatMap((group) => group.rows.map((row) => ({ group, row })));
}

function quantityRowHasAnyValue(row) {
  return parseQuantity(row?.[1]) !== 0 || parseQuantity(row?.[2]) !== 0;
}

function rowUnit(row, fallbackName = "") {
  return String(row?.[3] ?? "").trim() || guessUnit(fallbackName || row?.[0]);
}

function padRows(rows, count, columns) {
  const nextRows = [...rows];
  while (nextRows.length < count) nextRows.push(Array(columns).fill(""));
  return nextRows;
}

function cleanConstructionName(value) {
  return String(value ?? "")
    .split(/[：:,-]/)[0]
    .replace(/第?\d+.*$/, "")
    .replace(/[（(].*?[）)]/g, "")
    .trim();
}

function cleanMaterialName(value) {
  return String(value ?? "").replace(/[（(].*?[）)]/g, "").trim();
}

function cleanLaborName(value) {
  return String(value ?? "").replace(/[（(].*?[）)]/g, "").trim();
}

function guessUnit(value) {
  const text = String(value ?? "");
  const match = text.match(/[（(]([^）)]+)[）)]/);
  if (match) return match[1];
  if (text.includes("連續壁")) return "單元";
  if (text.includes("混凝土")) return "M³";
  if (text.includes("鐵板")) return "片";
  if (text.includes("續接器")) return "個";
  return "";
}

function updateZeroLaborToggle() {
  const button = document.getElementById("toggleZeroLaborRows");
  if (!button) return;
  const isShowing = Boolean(state.displayOptions?.showZeroLaborRows);
  button.textContent = isShowing ? "隱藏零工數" : "顯示零工數";
  button.setAttribute("aria-pressed", String(isShowing));
}

function updateZeroMaterialToggle() {
  const button = document.getElementById("toggleZeroMaterialRows");
  if (!button) return;
  const isShowing = Boolean(state.displayOptions?.showZeroMaterialRows);
  button.textContent = isShowing ? "隱藏零材料" : "顯示零材料";
  button.setAttribute("aria-pressed", String(isShowing));
}

function updatePreviewModeToggle() {
  document.getElementById("dailyReportModeBtn").setAttribute("aria-pressed", String(previewMode === "daily"));
  document.getElementById("constructionLogModeBtn").setAttribute("aria-pressed", String(previewMode === "constructionLog"));
}

function buildMainReportBlocks(reportLaborGroups, reportMaterialGroups) {
  const blocks = [...workBlocks()];
  blocks.push(...groupGridBlocks("本日出工數", reportLaborGroups, "labor-grid", 3, 12));
  blocks.push(...groupGridBlocks("本日進場材料", reportMaterialGroups, "material-grid", 4, 10));
  const footerBlocks = [
    ...noteBlocks("重要記事", state.notes),
    ...noteBlocks("交辦事項", state.instructions),
    reportBlock(`
    <div class="sign-row">
      <div>工地主任：${escapeHtml(state.siteManager)}</div>
      <div>製表：${escapeHtml(state.preparedBy)}</div>
    </div>`)
  ];

  return fillShortDailyReport(blocks, footerBlocks);
}

function workBlocks() {
  const todayLines = state.workToday.filter((line) => String(line).trim());
  const tomorrowLines = state.workTomorrow.filter((line) => String(line).trim());
  const todayChunks = chunkRows(todayLines, 8);
  const tomorrowChunks = chunkRows(tomorrowLines, 8);
  const blockCount = Math.max(todayChunks.length, tomorrowChunks.length, 1);
  const blocks = [];

  for (let index = 0; index < blockCount; index += 1) {
    const todayStart = index * 8;
    const tomorrowStart = index * 8;
    blocks.push(reportBlock(`
      <table class="work-table">
        <tbody>
          <tr><th>${index ? "本日工作（續）" : "本日工作"}</th><td><div class="numbered-lines">${escapeHtml(
            numberedLinesWithOffset(todayChunks[index] || [], todayStart)
          )}</div></td></tr>
          <tr><th>${index ? "明日工作（續）" : "明日工作"}</th><td><div class="numbered-lines">${escapeHtml(
            numberedLinesWithOffset(tomorrowChunks[index] || [], tomorrowStart)
          )}</div></td></tr>
        </tbody>
      </table>`));
  }

  return blocks;
}

function numberedLinesWithOffset(lines, offset) {
  return lines.map((line, index) => `${offset + index + 1}.${line}`).join("\n");
}

function reportBlock(content) {
  return `<div class="report-block">${content}</div>`;
}

function groupGridBlocks(title, groups, gridClass, columns, maxRowsPerTable) {
  const tableBlocks = [];
  groups.forEach((group) => {
    chunkRows(group.rows, maxRowsPerTable).forEach((rows, chunkIndex) => {
      tableBlocks.push(
        groupTable({
          ...group,
          title: chunkIndex ? `${group.title}（續）` : group.title,
          rows
        }, maxRowsPerTable)
      );
    });
  });

  return chunkPhotos(tableBlocks, columns).map((tables, index) => {
    const paddedTables = [...tables];
    while (paddedTables.length < columns) {
      paddedTables.push(groupTable({ title: "", rows: [] }, maxRowsPerTable));
    }
    const continuedTitle = index ? `${title}（續）` : title;
    return reportBlock(`
      <div class="report-section-title">${continuedTitle}</div>
      <div class="${gridClass}">${paddedTables.join("")}</div>`);
  });
}

function blankGridBlock(gridClass, columns, maxRowsPerTable) {
  const tables = Array.from({ length: columns }, () => groupTable({ title: "", rows: [] }, maxRowsPerTable));
  return reportBlock(`<div class="${gridClass}">${tables.join("")}</div>`);
}

function fillShortDailyReport(blocks, footerBlocks) {
  if (state.displayOptions?.showZeroLaborRows && state.displayOptions?.showZeroMaterialRows) return [...blocks, ...footerBlocks];

  const measurer = document.createElement("div");
  measurer.className = "pagination-measurer";
  document.body.appendChild(measurer);

  const filledBlocks = [...blocks];
  const fillerBlock = blankGridBlock("material-grid", 4, 10);
  let guard = 0;

  while (guard < 20) {
    const candidateBlocks = [...filledBlocks, fillerBlock, ...footerBlocks];
    if (reportBlocksOverflow(measurer, candidateBlocks)) break;
    filledBlocks.push(fillerBlock);
    guard += 1;
  }

  measurer.remove();
  return [...filledBlocks, ...footerBlocks];
}

function reportBlocksOverflow(container, blocks) {
  container.innerHTML = reportPage(blocks.join(""), 1, 1);
  const body = container.querySelector(".report-body");
  return body.scrollHeight > body.clientHeight + 1;
}

function noteBlocks(title, value) {
  return chunkTextForReport(value).map((chunk, index) => {
    const continuedTitle = index ? `${title}（續）` : title;
    return reportBlock(`
      <div class="report-section-title">${continuedTitle}</div>
      <div class="note-box">${escapeHtml(chunk)}</div>`);
  });
}

function chunkRows(rows, size) {
  if (!rows.length) return [];
  const chunks = [];
  for (let index = 0; index < rows.length; index += size) {
    chunks.push(rows.slice(index, index + size));
  }
  return chunks;
}

function chunkTextForReport(value) {
  const text = String(value || "").trim();
  if (!text) return [""];
  const chunks = [];
  let current = "";

  text.split(/\r?\n/).forEach((line) => {
    const next = current ? `${current}\n${line}` : line;
    if (next.length > 420 && current) {
      chunks.push(current);
      current = line;
    } else {
      current = next;
    }

    while (current.length > 520) {
      chunks.push(current.slice(0, 520));
      current = current.slice(520);
    }
  });

  if (current) chunks.push(current);
  return chunks.length ? chunks : [""];
}

function paginateReportBlocks(blocks) {
  const measurer = document.createElement("div");
  measurer.className = "pagination-measurer";
  document.body.appendChild(measurer);

  const pages = [];
  let currentBlocks = [];
  let measuringPage = createMeasuringPage(measurer);

  blocks.forEach((block) => {
    measuringPage.body.insertAdjacentHTML("beforeend", block);
    const overflows = measuringPage.body.scrollHeight > measuringPage.body.clientHeight + 1;

    if (overflows && currentBlocks.length) {
      measuringPage.body.lastElementChild.remove();
      pages.push(currentBlocks);
      currentBlocks = [];
      measuringPage.page.remove();
      measuringPage = createMeasuringPage(measurer);
      measuringPage.body.insertAdjacentHTML("beforeend", block);
    }

    currentBlocks.push(block);

    const singleBlockOverflows = measuringPage.body.scrollHeight > measuringPage.body.clientHeight + 1;
    if (singleBlockOverflows && currentBlocks.length === 1) {
      pages.push(currentBlocks);
      currentBlocks = [];
      measuringPage.page.remove();
      measuringPage = createMeasuringPage(measurer);
    }
  });

  if (currentBlocks.length) pages.push(currentBlocks);
  measurer.remove();
  return pages.length ? pages : [[]];
}

function createMeasuringPage(container) {
  container.insertAdjacentHTML("beforeend", reportPage("", 1, 1));
  const page = container.lastElementChild;
  return {
    page,
    body: page.querySelector(".report-body")
  };
}

function reportPage(bodyHtml, pageNumber, totalPages, bodyClass = "") {
  return `
    <article class="report-page">
      ${metaHeader()}
      <div class="report-body ${bodyClass}">${bodyHtml}</div>
      <footer class="footer"><span>${escapeHtml(state.meta.sourceUrl)}</span><span>${pageNumber}/${totalPages}</span></footer>
    </article>`;
}

function chunkPhotos(photos, size) {
  const source = photos;
  if (!source.length) return [];
  const chunks = [];
  for (let index = 0; index < source.length; index += size) {
    const chunk = source.slice(index, index + size);
    chunks.push(chunk);
  }
  return chunks;
}

function photoCell(photo, index) {
  return `
    <div class="photo-cell-report">
      <div class="photo-frame-report">
        ${photo.image ? `<img src="${photo.image}" alt="施工照片 ${index + 1}" />` : `<span class="photo-placeholder">照片 ${index + 1}</span>`}
      </div>
      <div class="photo-caption-report">${index + 1}.${escapeHtml(photo.caption)}</div>
    </div>`;
}

function downloadCsv() {
  const rows = buildCsvRows();
  const csv = "\ufeff" + rows.map((row) => row.map(csvCell).join(",")).join("\r\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${fileSafeName(state.meta.projectName || "工地日報")}-${fileSafeName(state.meta.reportDate || new Date().toISOString().slice(0, 10))}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function buildCsvRows() {
  const rows = [
    ["類別", "項目", "單位", "本日", "累計", "備註"],
    ["基本資料", "工程標題", "", "", "", state.meta.title],
    ["基本資料", "填表日期", "", "", "", state.meta.reportDate],
    ["基本資料", "工程名稱", "", "", "", state.meta.projectName],
    ["基本資料", "承造人", "", "", "", state.meta.contractor],
    ["基本資料", "建照號碼", "", "", "", state.meta.permitNo],
    ["基本資料", "開工日期", "", "", "", state.meta.startDate],
    ["基本資料", "核定竣工日期", "", "", "", state.meta.completionDate],
    ["基本資料", "預定進度(%)", "", "", "", state.meta.plannedProgress],
    ["基本資料", "實際進度(%)", "", "", "", state.meta.actualProgress],
    ["天氣", "上午", "", "", "", state.weather.morning],
    ["天氣", "下午", "", "", "", state.weather.afternoon]
  ];

  state.workToday.forEach((line, index) => rows.push(["本日工作", index + 1, "", "", "", line]));
  state.workTomorrow.forEach((line, index) => rows.push(["明日工作", index + 1, "", "", "", line]));

  state.laborGroups.forEach((group) => {
    group.rows.forEach((row) => {
      rows.push([`本日出工數-${group.title}`, row[0], row[3] || "", row[1], cumulativeWithToday(row[1], row[2]), ""]);
    });
  });

  state.materialGroups.forEach((group) => {
    group.rows.forEach((row) => {
      rows.push([`本日進場材料-${group.title}`, row[0], row[3] || "", row[1], cumulativeWithToday(row[1], row[2]), ""]);
    });
  });

  rows.push(["記事與簽核", "重要記事", "", "", "", state.notes]);
  rows.push(["記事與簽核", "交辦事項", "", "", "", state.instructions]);
  rows.push(["記事與簽核", "工地主任", "", "", "", state.siteManager]);
  rows.push(["記事與簽核", "製表", "", "", "", state.preparedBy]);
  state.photos.forEach((photo, index) => rows.push(["施工照片", index + 1, "", "", "", photo.caption]));

  return rows;
}

function csvCell(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

function fileSafeName(value) {
  return String(value)
    .trim()
    .replace(/[\\/:*?"<>|]+/g, "-")
    .replace(/\s+/g, "")
    .slice(0, 80) || "工地日報";
}

function importReportData(text) {
  const source = String(text || "").trimStart();
  if (source.startsWith("{") || source.startsWith("[")) {
    return mergeState(clone(defaultState), JSON.parse(source));
  }
  return stateFromCsv(parseCsv(source));
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && inQuotes && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      row.push(cleanCsvCell(cell));
      cell = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cleanCsvCell(cell));
      if (row.some((value) => value !== "")) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  row.push(cleanCsvCell(cell));
  if (row.some((value) => value !== "")) rows.push(row);
  return rows;
}

function cleanCsvCell(value) {
  return String(value ?? "").replace(/^\ufeff/, "");
}

function stateFromCsv(rows) {
  const nextState = clone(defaultState);
  const metaMap = {
    工程標題: "title",
    填表日期: "reportDate",
    工程名稱: "projectName",
    承造人: "contractor",
    建照號碼: "permitNo",
    開工日期: "startDate",
    核定竣工日期: "completionDate",
    "預定進度(%)": "plannedProgress",
    "實際進度(%)": "actualProgress",
    頁尾網址: "sourceUrl"
  };
  const laborGroups = [];
  const materialGroups = [];
  const photoRows = [];
  const workToday = [];
  const workTomorrow = [];

  const hasUnitColumn = rows[0]?.[2] === "單位";

  rows.forEach((sourceRow) => {
    const [category = "", item = ""] = sourceRow;
    const unit = hasUnitColumn ? sourceRow[2] || "" : "";
    const today = hasUnitColumn ? sourceRow[3] || "" : sourceRow[2] || "";
    const total = hasUnitColumn ? sourceRow[4] || "" : sourceRow[3] || "";
    const note = hasUnitColumn ? sourceRow[5] || "" : sourceRow[4] || "";

    if (category === "類別") return;

    if (category === "基本資料" && metaMap[item]) {
      nextState.meta[metaMap[item]] = note;
    } else if (category === "天氣" && item === "上午") {
      nextState.weather.morning = note;
    } else if (category === "天氣" && item === "下午") {
      nextState.weather.afternoon = note;
    } else if (category === "本日工作") {
      workToday[csvRowIndex(item, workToday.length)] = note;
    } else if (category === "明日工作") {
      workTomorrow[csvRowIndex(item, workTomorrow.length)] = note;
    } else if (category.startsWith("本日出工數-")) {
      pushCsvGroupRow(laborGroups, category.replace("本日出工數-", ""), item, today, total, unit);
    } else if (category.startsWith("本日進場材料-")) {
      pushCsvGroupRow(materialGroups, category.replace("本日進場材料-", ""), item, today, total, unit);
    } else if (category === "記事與簽核" && item === "重要記事") {
      nextState.notes = note;
    } else if (category === "記事與簽核" && item === "交辦事項") {
      nextState.instructions = note;
    } else if (category === "記事與簽核" && item === "工地主任") {
      nextState.siteManager = note;
    } else if (category === "記事與簽核" && item === "製表") {
      nextState.preparedBy = note;
    } else if (category === "施工照片") {
      photoRows[csvRowIndex(item, photoRows.length)] = { caption: note, image: "" };
    }
  });

  if (workToday.length) nextState.workToday = workToday.filter((line) => line !== undefined);
  if (workTomorrow.length) nextState.workTomorrow = workTomorrow.filter((line) => line !== undefined);
  if (laborGroups.length) nextState.laborGroups = laborGroups;
  if (materialGroups.length) nextState.materialGroups = materialGroups;
  if (photoRows.length) nextState.photos = photoRows.filter((photo) => photo !== undefined);

  return nextState;
}

function csvRowIndex(value, fallback) {
  const number = Number(value);
  return Number.isInteger(number) && number > 0 ? number - 1 : fallback;
}

function pushCsvGroupRow(groups, title, item, today, total, unit = "") {
  let group = groups.find((candidate) => candidate.title === title);
  if (!group) {
    group = { title, rows: [] };
    groups.push(group);
  }
  group.rows.push([item, today, total, unit]);
}

function downloadPdf() {
  renderPreview();
  window.print();
}

function attachGlobalEvents() {
  document.getElementById("morningWeather").addEventListener("change", (event) => {
    state.weather.morning = event.target.value;
    persist();
    renderPreview();
  });

  document.getElementById("afternoonWeather").addEventListener("change", (event) => {
    state.weather.afternoon = event.target.value;
    persist();
    renderPreview();
  });

  wireInput(document.getElementById("notes"), (value) => {
    state.notes = value;
  });
  wireInput(document.getElementById("instructions"), (value) => {
    state.instructions = value;
  });
  wireInput(document.getElementById("siteManager"), (value) => {
    state.siteManager = value;
  });
  wireInput(document.getElementById("preparedBy"), (value) => {
    state.preparedBy = value;
  });

  document.getElementById("addTodayWork").addEventListener("click", () => {
    state.workToday.push("");
    persist();
    renderEditor();
    renderPreview();
  });

  document.getElementById("addTomorrowWork").addEventListener("click", () => {
    state.workTomorrow.push("");
    persist();
    renderEditor();
    renderPreview();
  });

  document.getElementById("toggleZeroLaborRows").addEventListener("click", () => {
    state.displayOptions = {
      ...state.displayOptions,
      showZeroLaborRows: !state.displayOptions?.showZeroLaborRows
    };
    persist();
    updateZeroLaborToggle();
    renderPreview();
  });

  document.getElementById("toggleZeroMaterialRows").addEventListener("click", () => {
    state.displayOptions = {
      ...state.displayOptions,
      showZeroMaterialRows: !state.displayOptions?.showZeroMaterialRows
    };
    persist();
    updateZeroMaterialToggle();
    renderPreview();
  });

  document.getElementById("addPhoto").addEventListener("click", () => {
    state.photos.push({ caption: "", image: "" });
    persist();
    renderEditor();
    renderPreview();
  });

  document.getElementById("zoomOutBtn").addEventListener("click", () => {
    userAdjustedPreviewZoom = true;
    setPreviewZoom(previewZoom - 0.1);
  });

  document.getElementById("zoomInBtn").addEventListener("click", () => {
    userAdjustedPreviewZoom = true;
    setPreviewZoom(previewZoom + 0.1);
  });

  document.getElementById("zoomResetBtn").addEventListener("click", () => {
    userAdjustedPreviewZoom = false;
    setPreviewZoom(responsivePreviewZoom());
  });

  document.getElementById("dailyReportModeBtn").addEventListener("click", () => {
    previewMode = "daily";
    updatePreviewModeToggle();
    renderPreview();
  });

  document.getElementById("constructionLogModeBtn").addEventListener("click", () => {
    previewMode = "constructionLog";
    updatePreviewModeToggle();
    renderPreview();
  });

  document.getElementById("downloadPdfBtn").addEventListener("click", downloadPdf);

  document.getElementById("saveBtn").addEventListener("click", downloadCsv);

  document.getElementById("importBtn").addEventListener("click", () => {
    document.getElementById("importFile").click();
  });

  document.getElementById("importFile").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        state = importReportData(reader.result);
        persist();
        renderEditor();
        renderPreview();
      } catch {
        alert("匯入失敗，請確認檔案是本工具下載的 CSV 或舊版 JSON。");
      }
    };
    reader.readAsText(file);
    event.target.value = "";
  });

  document.getElementById("resetBtn").addEventListener("click", () => {
    if (!confirm("確定要重設成預設範本？目前資料會被清除。")) return;
    state = clone(defaultState);
    persist();
    renderEditor();
    renderPreview();
  });
}

function setPreviewZoom(value) {
  previewZoom = Math.min(1.6, Math.max(0.38, Math.round(value * 10) / 10));
  const scaler = document.getElementById("previewScaler");
  const label = document.getElementById("zoomLabel");
  scaler.style.transform = `scale(${previewZoom})`;
  scaler.style.width = `${100 / previewZoom}%`;
  label.textContent = `${Math.round(previewZoom * 100)}%`;
}

function responsivePreviewZoom() {
  const pageWidth = 794;
  const viewportWidth = window.innerWidth || pageWidth;
  if (viewportWidth > 1180) return 1;
  const availableWidth = Math.max(340, viewportWidth - 28);
  return Math.min(1, Math.max(0.38, availableWidth / pageWidth));
}

window.addEventListener("resize", () => {
  if (!userAdjustedPreviewZoom) setPreviewZoom(responsivePreviewZoom());
});

renderEditor();
attachGlobalEvents();
updatePreviewModeToggle();
setPreviewZoom(responsivePreviewZoom());
renderPreview();
